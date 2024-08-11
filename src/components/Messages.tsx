import { type Message as TMessage } from "ai/react";
import { MessageSquare } from "lucide-react";
import { Message } from "./Message";

interface MessagesProps {
  messages: TMessage[];
}

export const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className="flex flex-col max-h-[calc(100vh-3.5rem-7rem)] flex-1 overflow-y-auto p-4 bg-gray-900 rounded-lg shadow-md">
      {messages.length ? (
        messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 p-4 bg-gray-800 rounded-lg shadow-lg">
          <MessageSquare className="w-16 h-16 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">
            You're all set!
          </h3>
          <p className="text-gray-400 text-sm">
            Ask your first question to get started.
          </p>
        </div>
      )}
    </div>
  );
};
