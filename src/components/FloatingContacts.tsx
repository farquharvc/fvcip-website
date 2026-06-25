import React from 'react';
import { MessageSquareText } from 'lucide-react';

export default function FloatingContacts() {
  const phoneNumber = '+65 80832595';

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a 
        href={`https://wa.me/6580832595`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white hover:bg-gray-50 p-2 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group relative border border-gray-100"
        aria-label="WhatsApp"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8 object-contain" />
        <span className="absolute right-full mr-3 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
      </a>
      
      <a 
        href={`sms:${phoneNumber.replace(/\s+/g, '')}`}
        className="bg-white hover:bg-gray-50 p-2 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group relative border border-gray-100"
        aria-label="Message"
      >
        <MessageSquareText className="w-7 h-7 m-0.5 text-primary" />
        <span className="absolute right-full mr-3 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Message</span>
      </a>
    </div>
  );
}
