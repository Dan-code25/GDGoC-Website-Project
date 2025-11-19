import React, { useState } from 'react';
import { SendIcon } from './Icons';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 w-full px-5 py-3 text-sm bg-red-100 border-2 border-red-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 text-slate-800 placeholder:text-red-400/80 pr-12"
        disabled={isLoading}
        aria-label="Chat input"
      />
      <button
        type="submit"
        disabled={isLoading || !inputValue.trim()}
        className="absolute right-3 w-8 h-8 flex items-center justify-center text-slate-700 rounded-full transition-colors duration-200 disabled:text-slate-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-400"
        aria-label="Send message"
      >
        <SendIcon />
      </button>
    </form>
  );
};

export default ChatInput;