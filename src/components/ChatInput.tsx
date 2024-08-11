"use client";

import { Button, Textarea } from "@nextui-org/react";
import { Send } from "lucide-react";
import { type useChat } from "ai/react";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface ChatInputProps {
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
}

export const ChatInput = ({
  handleInputChange,
  handleSubmit,
  input,
  setInput,
}: ChatInputProps) => {
  return (
    <div className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="flex flex-row gap-3 max-w-3xl mx-auto">
        <div className="relative flex-1">
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <Textarea
              minRows={4}
              autoFocus
              onChange={handleInputChange}
              value={input}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                  setInput("");
                }
              }}
              placeholder="Enter your question..."
              className="resize-none bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            />

            <Button
              size="sm"
              type="submit"
              className="absolute right-2 bottom-2 bg-blue-600 text-white border border-blue-700 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
