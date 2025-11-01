import React from 'react';
import { GooglerAiIcon } from './Icons';

interface FaqSuggestionsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

const FaqSuggestions: React.FC<FaqSuggestionsProps> = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="flex items-end gap-2 mt-2">
       <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
        <GooglerAiIcon className="w-full h-full" />
      </div>
      <div className="max-w-[75%]">
        <div className="mb-3">
            <span className="bg-yellow-100 text-slate-800 text-sm px-2.5 py-1.5 rounded-full">
            Frequently Asked Questions (FAQs)
            </span>
        </div>
        <div className="grid grid-cols-2 gap-2" style={{ gridAutoRows: '1fr' }}>
            {suggestions.map((suggestion, index) => (
            <button
                key={index}
                onClick={() => onSuggestionClick(suggestion)}
                className="flex items-center justify-center text-center text-sm font-medium text-slate-700 bg-white px-1.5 py-1 rounded-xl border-2 border-dashed border-indigo-200 h-full hover:bg-slate-50 hover:border-indigo-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                aria-label={`Ask: ${suggestion}`}
            >
                {suggestion}
            </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSuggestions;
