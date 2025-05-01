import React from "react";
import { Link } from "react-router-dom";
import { Search, Bell, Plus, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-indigo-600 text-white p-1 rounded-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 6V12M12 12V18M12 12H18M12 12H6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">SkillShare</span>
        </Link>
        
        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex items-center relative max-w-md w-full">
          <input 
            type="text" 
            placeholder="Search for skills, topics, or users..." 
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white" 
          />
          <Search className="absolute left-3 text-gray-500" size={18} />
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-1 md:gap-3">
          {/* Create Button */}
          <Link 
            to="/create" 
            className="flex items-center gap-1 bg-indigo-600 text-white px-3 py-2 rounded-full hover:bg-indigo-700 transition-colors"
          >
            <Plus size={18} />
            <span className="hidden md:inline">Create</span>
          </Link>
          
          {/* Notifications Button */}
          <Link to="/notifications" className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full">
            <Bell size={22} />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Link>
          
          {/* Profile Button */}
          <Link to="/profile/johndoe" className="p-2 text-gray-700 hover:bg-gray-100 rounded-full">
            <User size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;