import { ragChat } from "@/lib/rag-chat";
import { redis } from "../../lib/redis";
import { ChatWrapper } from "../../components/ChatWrapper";
import { cookies } from "next/headers";

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}

// Function to reconstruct the URL from array components
function getReconstructedUrl(url: string[]): string {
  const decodeComponents = url.map((component) =>
    decodeURIComponent(component)
  );

  return decodeComponents.join("/");
}

const Page = async ({ params }: PageProps) => {
  const sessionCookie = cookies().get("sessionId")?.value;
  const reconstructedUrl = getReconstructedUrl(params.url as string[]);

  const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(
    /\//g,
    ""
  );

  const isAlreadyIndexed = await redis.sismember(
    "indexed-urls",
    reconstructedUrl
  );

  const initialMessages=await ragChat.history.getMessages({amount:10,sessionId})

  //   console.log("isAlreadyIndexed", isAlreadyIndexed);

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });

    await redis.sadd("indexed-urls", reconstructedUrl);
  }

  return <ChatWrapper initialMessages={initialMessages} sessionId={sessionId} />;
};

export default Page;
