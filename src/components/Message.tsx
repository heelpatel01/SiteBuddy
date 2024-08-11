import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

export const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div
      className={cn(
        "rounded-lg p-4 my-2",
        {
          "bg-gray-800": isUserMessage,
          "bg-gray-900/50": !isUserMessage,
        }
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-full border-2",
            {
              "border-blue-600 bg-blue-800 text-white": isUserMessage,
              "border-gray-700 bg-gray-800 text-gray-300": !isUserMessage,
            }
          )}
        >
          {isUserMessage ? (
            <User className="w-6 h-6" />
          ) : (
            <Bot className="w-6 h-6" />
          )}
        </div>

        <div className="flex flex-col w-full">
          <div className="flex items-center mb-1">
            <span
              className={cn(
                "text-sm font-semibold",
                {
                  "text-gray-300": isUserMessage,
                  "text-gray-100": !isUserMessage,
                }
              )}
            >
              {isUserMessage ? "You" : "Website"}
            </span>
          </div>

          <p
            className={cn(
              "text-sm",
              {
                "text-gray-200": isUserMessage,
                "text-gray-300": !isUserMessage,
              }
            )}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
