"use client";

import { User, X, Heart, MessageSquare } from 'lucide-react';

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex justify-around items-center h-16 px-4">
        <button className="p-3 rounded-full bg-gray-100">
          <User className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-4 rounded-full bg-gray-100">
          <X className="w-6 h-6 text-black" />
        </button>
        <button className="p-3 rounded-full bg-gray-100">
          <Heart className="w-5 h-5 text-blue-500" fill="currentColor" />
        </button>
        <button className="p-3 rounded-full bg-gray-100">
          <MessageSquare className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
