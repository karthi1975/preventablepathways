import { Loader2, MessageSquare, Send, Trash2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Welcome! I'm here to help you learn about childhood obesity, pancreatic cancer risk, nutrition, and prevention strategies. Ask me anything!",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "How does childhood obesity increase cancer risk?",
    "What are healthy snack options for kids?",
    "How much physical activity do children need?",
    "What foods should we avoid?",
    "How can I get my child to eat more vegetables?",
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      });

      const data = await response.json();

      let aiContent: string;
      if (data.error && data.type === "moderation") {
        aiContent = `⚠️ ${data.error}`;
      } else if (data.error) {
        aiContent = `Sorry, something went wrong: ${data.error}`;
      } else {
        aiContent = data.reply;
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiContent,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Sorry, I'm having trouble connecting right now. Please check your internet connection and try again.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "1",
        content:
          "Welcome! I'm here to help you learn about childhood obesity, pancreatic cancer risk, nutrition, and prevention strategies. Ask me anything!",
        sender: "ai",
        timestamp: new Date(),
      },
    ]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <MessageSquare className="h-8 w-8 text-[#00ACC1]" />
        <h1 className="text-[#00ACC1]">AI Health Assistant</h1>
      </div>

      {/* Chat Area */}
      <div className="mb-4 flex-1 overflow-y-auto rounded-xl bg-white p-6 shadow-sm">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.sender === "user"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-[#00ACC1] text-white"
                }`}
              >
                <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                <p
                  className={`mt-1 text-xs ${
                    message.sender === "user" ? "text-gray-500" : "text-white/70"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 rounded-2xl bg-[#00ACC1] px-4 py-3 text-white">
                <Loader2 className="h-4 w-4 animate-spin" />
                <p className="text-sm">Thinking...</p>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Suggested Questions */}
      <div className="mb-4">
        <h2 className="mb-3 text-sm text-gray-600">Suggested Questions</h2>
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleSuggestedQuestion(question)}
              className="rounded-full bg-[#B2EBF2] px-4 py-2 text-sm text-[#00ACC1] transition-colors hover:bg-[#00ACC1] hover:text-white"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about obesity, nutrition, cancer prevention..."
            className="flex-1 border-gray-300"
            disabled={isLoading}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-[#00ACC1] hover:bg-[#0097A7]"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </Button>
        </div>
        <Button
          onClick={handleClearChat}
          variant="outline"
          className="w-full border-[#00ACC1] text-[#00ACC1] hover:bg-[#E0F7FA]"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Clear Chat History
        </Button>
      </div>
    </div>
  );
}
