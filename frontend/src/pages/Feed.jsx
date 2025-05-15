//import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

const Feed = () => {
  // Sample posts data
  const posts = [
    {
      id: 1,
      author: {
        name: "Emily Chen",
        username: "emilychen",
        title: "UI Designer & Front-end Developer",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      },
      content:
        "Just finished my latest tutorial on React Hooks! 🚀 Here's a quick overview of what I've learned about useState and useEffect. Check out the code samples below.",
      tags: ["reactjs", "webdev", "javascript", "coding"],
      media: [
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ],
      likes: 42,
      comments: [
        {
          author: {
            name: "David Kim",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
          },
          content:
            "This is super helpful! I've been struggling with useEffect for a while.",
          time: "2h ago",
        },
        {
          author: {
            name: "Sarah Johnson",
            avatar: "https://randomuser.me/api/portraits/women/22.jpg",
          },
          content:
            "Great explanation! Could you share more about dependency arrays?",
          time: "1h ago",
        },
      ],
      time: "3 hours ago",
      type: "learning_progress",
    },
    {
      id: 2,
      author: {
        name: "Michael Torres",
        username: "michaelt",
        title: "Professional Chef",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      },
      content:
        "Today I'm sharing my secret technique for perfectly seared scallops! The key is getting the pan screaming hot and making sure your scallops are completely dry before cooking.",
      tags: ["cooking", "seafood", "culinary", "chefsofinstagram"],
      media: [
        "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ],
      likes: 87,
      comments: [
        {
          author: {
            name: "Lisa Wong",
            avatar: "https://randomuser.me/api/portraits/women/33.jpg",
          },
          content:
            "I tried this technique last night and it worked perfectly! Thanks Michael!",
          time: "5h ago",
        },
      ],
      time: "8 hours ago",
      type: "skill_sharing",
    },
    {
      id: 3,
      author: {
        name: "Alex Rivera",
        username: "alexr",
        title: "Photography Enthusiast",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      content:
        "I've created a 30-day learning plan to improve my landscape photography skills. I'll be focusing on composition for the first week, then lighting techniques, followed by post-processing.",
      tags: ["photography", "learning", "landscape"],
      media: [],
      likes: 29,
      comments: [
        {
          author: {
            name: "Jordan Taylor",
            avatar: "https://randomuser.me/api/portraits/women/67.jpg",
          },
          content:
            "This sounds like a great plan! Would you mind sharing some resources you're using?",
          time: "3h ago",
        },
      ],
      time: "1 day ago",
      type: "learning_plan",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Your Feed</h1>
        <p className="text-gray-600">
          Check out the latest updates from your network
        </p>
      </div>

      <div className="mb-6 bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="Your profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <input
            type="text"
            placeholder="Share what you're learning or teaching..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex mt-3 pt-3 border-t border-gray-100">
          <button className="flex items-center justify-center gap-2 flex-1 py-1.5 text-gray-700 hover:bg-gray-50 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="text-sm font-medium">Photo</span>
          </button>

          <button className="flex items-center justify-center gap-2 flex-1 py-1.5 text-gray-700 hover:bg-gray-50 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            <span className="text-sm font-medium">Video</span>
          </button>

          <button className="flex items-center justify-center gap-2 flex-1 py-1.5 text-gray-700 hover:bg-gray-50 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span className="text-sm font-medium">Plan</span>
          </button>
        </div>
      </div>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
