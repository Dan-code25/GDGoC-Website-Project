import React, { useState, useEffect, useRef, useCallback } from 'react';
import { streamChatResponse } from './services/geminiService';
import { BOT_NAME, INITIAL_MESSAGE, FAQ_SUGGESTIONS } from './constants';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import FaqSuggestions from './FaqSuggestions';
import { GooglerAiIcon, UserIcon, CloseIcon } from './Icons';
import { Sender } from './types';
import type { Message } from './types';

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);
  
  const handleSendMessage = useCallback(async (text: string) => {
    if (isLoading || !text.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: Sender.User,
    };
    
    const botMessageId = `bot-${Date.now()}`;
    const placeholderMessage: Message = {
      id: botMessageId,
      text: '',
      sender: Sender.Bot,
    };

    setMessages(prev => [...prev, userMessage, placeholderMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const stream = streamChatResponse(text);
      let fullResponse = '';
      
      for await (const chunkText of stream) {
        fullResponse += chunkText || '';
      }

      // This removes all asterisks from the response, cleaning up markdown formatting.
      const cleanedResponse = fullResponse.replace(/\*/g, '');

      setMessages(prev =>
        prev.map(msg =>
          msg.id === botMessageId ? { ...msg, text: cleanedResponse } : msg
        )
      );

    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
        setError(errorMessage);
        const errorMessageObject: Message = {
            id: `error-${Date.now()}`,
            text: `Sorry, something went wrong: ${errorMessage}`,
            sender: Sender.Bot,
        };
        setMessages(prev => {
            const newMessages = prev.filter(msg => msg.id !== botMessageId);
            return [...newMessages, errorMessageObject];
        });
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);
 
  return (
    
    <div className="w-80 sm:w-96 h-[60vh] max-h-[700px] flex flex-col bg-red-500 rounded-2xl shadow-2xl overflow-hidden border-2 border-red-500">
      <header className="bg-red-500 text-white p-3 flex items-center justify-between gap-4 shadow-md flex-shrink-0">
        <div className="flex items-center gap-3">
          <GooglerAiIcon className="w-9 h-9" />
          <h2 className="text-lg font-bold">{BOT_NAME}</h2>
        </div>
        <button 
          onClick={onClose} 
          className="text-white hover:bg-white/20 rounded-full p-1.5 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close chat"
        >
          <CloseIcon />
        </button>
      </header>
      <div className="flex-1 p-4 overflow-y-auto bg-slate-50 custom-scrollbar">
        <div className="flex flex-col gap-2">
          {messages.map((message, index) => (
            <ChatBubble
              key={message.id}
              message={message}
              avatar={message.sender === Sender.User ? <UserIcon /> : <GooglerAiIcon className="w-full h-full" />}
              isTyping={
                isLoading &&
                index === messages.length - 1 &&
                message.sender === Sender.Bot &&
                !message.text
              }
            />
          ))}
          {messages.length === 1 && (
            <FaqSuggestions
              suggestions={FAQ_SUGGESTIONS}
              onSuggestionClick={handleSendMessage}
            />
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      {error && <p className="p-2 text-sm text-red-500 bg-red-100">{error}</p>}
      <div className="p-4 border-t border-slate-200 bg-white">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Chatbot;