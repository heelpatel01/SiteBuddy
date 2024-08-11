"use client";

import { Message, useChat } from "ai/react";
import { Messages } from "./Messages";
import { ChatInput } from "./ChatInput";

export const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string;
  initialMessages: Message[];
}) => {
  const { messages, handleInputChange, handleSubmit, input, setInput } =
    useChat({
      api: "/api/chat-stream",
      body: { sessionId },
      initialMessages,
    });

  return (
    <div className="relative min-h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex flex-col justify-between divide-y divide-gray-600 p-4 rounded-lg shadow-lg">
      <div className="flex-1 bg-gray-800 p-4 rounded-lg overflow-y-auto">
        <Messages messages={messages} />
      </div>

      <div className="mt-4">
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setInput={setInput}
          // className={
          //   "bg-gray-700 text-white border border-gray-600 rounded-lg shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          // }
        />
      </div>
    </div>
  );
};
