import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Chatbot from './Chatbot';
import { ChatIcon, CloseIcon } from './Icons';

export default function ChatbotOverlay() {
  const [open, setOpen] = useState(false);

  return (
    <>      
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-label="Open chat"
        style={{
          position: 'fixed',
          right: 20,
          bottom: 20,
          zIndex: 1500,
          width: 56,
          height: 56,
          borderRadius: 999,
          background: '#ef4444',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          padding: 0,
        }}
      >
        <ChatIcon />
      </button>

      {open && createPortal(
        <div
          style={{
            position: 'fixed',
            right: 20,
            bottom: 90,
            zIndex: 1500,
            width: 360,
            height: '60vh',
            maxHeight: 700,
            marginRight: 20,
          }}
        >
          <Chatbot onClose={() => setOpen(false)} />
        </div>,
        document.body
      )}
    </>
  );
}