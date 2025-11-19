import React from 'react';
import { Sender } from './types';
import type { Message } from './types';

interface ChatBubbleProps {
  message: Message;
  avatar: React.ReactNode;
  isTyping?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, avatar, isTyping = false }) => {
  const isUser = message.sender === Sender.User;

  const bubbleClasses = isUser
    ? 'bg-red-500 text-white'
    : 'bg-yellow-100 text-slate-800';

  const typingAnimation = (
    <div className="flex items-center gap-1.5">
      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-0"></span>
      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-300"></span>
    </div>
  );

  return (
    <div className={`flex items-end gap-2 ${isUser ? 'flex-row-reverse mt-2 mb-2' : 'flex-row'}`}>
       <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
        {avatar}
      </div>
      <div
        className={`max-w-[75%] rounded-xl px-3 py-2 shadow-sm transition-all duration-300 ${bubbleClasses}`}
      >
        {isTyping ? typingAnimation : <p className="text-sm whitespace-pre-wrap m-0">{message.text}</p>}
      </div>
    </div>
  );
};

export default ChatBubble;