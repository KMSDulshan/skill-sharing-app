import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  User,
  BookOpen,
  TrendingUp,
  Bookmark,
  Users,
  Settings,
  School,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    {
      icon: Home,
      label: "Home",
      path: "/",
    },
    {
      icon: User,
      label: "Profile",
      path: "/profile/johndoe",
    },
    {
      icon: School,
      label: "Resources",
      path: "/resources",
    },
    {
      icon: BookOpen,
      label: "Learning Plans",
      path: "/learning-plans",
    },
    {
      icon: TrendingUp,
      label: "Progress",
      path: "/progress",
    },
    {
      icon: Bookmark,
      label: "Saved",
      path: "/saved",
    },
    {
      icon: Users,
      label: "Following",
      path: "/following",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/settings",
    },
  ];

  return (
    <aside className="hidden md:block w-64 bg-white border-r border-gray-200 p-4">
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-indigo-50 text-indigo-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} className={isActive ? "text-indigo-600" : ""} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
        <h3 className="font-medium text-indigo-800">Upgrade to Pro</h3>
        <p className="text-sm text-indigo-700 mt-1">
          Get access to advanced features and premium content.
        </p>
        <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Upgrade Now
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
