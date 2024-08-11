import Image from "next/image";
import image1 from "../../img1.jpg";
import image2 from "../../img2.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Header Section */}
      <header className="w-full max-w-5xl text-center py-16 px-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-shadow-lg">
          Welcome to ChatPage!
        </h1>
        <p className="mt-4 text-xl font-medium">
          Easily interact with any website by simply adding our URL before the
          site's address.
        </p>
      </header>

      {/* Description Section */}
      <section className="w-full max-w-5xl mt-16 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why ChatPage?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            ChatPage revolutionizes the way you interact with websites. By
            simply prefixing our URL, you unlock a new layer of engagement and
            functionality on any site. Whether you want to provide real-time
            feedback, ask questions, or explore features in an interactive way,
            ChatPage makes it seamless and intuitive.
          </p>
          <p className="text-lg text-gray-700">
            Our platform is designed with user experience in mind, offering a
            clean and responsive interface that works effortlessly across
            devices. Dive into a more interactive web experience and make every
            visit to your favorite websites more dynamic with ChatPage.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full max-w-5xl mt-16 px-4">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">
          How It Works
        </h2>

        {/* Screenshots with Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <Image
              src={image1}
              alt="Screenshot of normal URL"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
            <p className="mt-4 text-center text-gray-700">
              This is how the website looks with its normal URL.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <Image
              src={image2}
              alt="Screenshot of chat interface"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
            <p className="mt-4 text-center text-gray-700">
              Add our URL at the beginning to open a chat UI and interact with
              the website's content.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-5xl mt-16 px-4 py-12 bg-blue-600 text-white rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold">Get Started Now</h2>
        <p className="mt-4 text-lg">
          Try it out by adding our URL before any website's address and start
          chatting!
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-5xl mt-24 px-4 py-6 bg-gray-800 text-white rounded-lg text-center shadow-md">
        <p>© 2024 ChatPage. All rights reserved.</p>
      </footer>
    </main>
  );
}
