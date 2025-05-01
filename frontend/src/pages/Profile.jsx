import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MapPin, Link as LinkIcon, Calendar, Edit } from "lucide-react";
import PostCard from "../components/PostCard";

const Profile = () => {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState("posts");

  // Sample user data
  const user = {
    name: "Emily Chen",
    username: "emilychen",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    cover: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "UI Designer & Front-end Developer | Learning enthusiast | Sharing my journey in web development and design",
    location: "San Francisco, CA",
    website: "emilychen.design",
    joinedDate: "January 2022",
    followers: 342,
    following: 128,
    skills: ["React", "UI/UX Design", "JavaScript", "CSS", "Figma"]
  };

  // Sample posts
  const posts = [
    {
      id: 1,
      author: {
        name: user.name,
        username: user.username,
        title: "UI Designer & Front-end Developer",
        avatar: user.avatar
      },
      content: "Just finished my latest tutorial on React Hooks! 🚀 Here's a quick overview of what I've learned about useState and useEffect. Check out the code samples below.",
      tags: ["reactjs", "webdev", "javascript", "coding"],
      media: ["https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"],
      likes: 42,
      comments: [
        {
          author: {
            name: "David Kim",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg"
          },
          content: "This is super helpful! I've been struggling with useEffect for a while.",
          time: "2h ago"
        }
      ],
      time: "3 hours ago"
    }
  ];

  // Sample learning plans
  const learningPlans = [
    {
      id: 1,
      title: "Advanced React Patterns",
      description: "A 6-week plan to master advanced React patterns including render props, HOCs, and custom hooks.",
      progress: 65,
      startDate: "2023-05-15",
      endDate: "2023-06-30"
    },
    {
      id: 2,
      title: "UI Animation Fundamentals",
      description: "Learning the principles of effective UI animation and implementing them with CSS and JavaScript.",
      progress: 30,
      startDate: "2023-06-01",
      endDate: "2023-07-15"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Cover Image */}
      <div className="h-48 md:h-64 rounded-xl overflow-hidden mb-4 relative">
        <img src={user.cover} alt="Cover" className="w-full h-full object-cover" />
        <button className="absolute right-4 bottom-4 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100">
          <Edit size={18} />
        </button>
      </div>

      {/* Profile Header */}
      <div className="sm:flex justify-between items-end mb-6">
        <div className="flex sm:block">
          <div className="relative -mt-16 sm:-mt-24 mb-4">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white object-cover" 
            />
            <button className="absolute right-1 bottom-1 bg-white p-1.5 rounded-full hover:bg-gray-100 border border-gray-200">
              <Edit size={16} />
            </button>
          </div>
          
          <div className="ml-4 sm:ml-0">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600">@{user.username}</p>
            <p className="mt-2 text-gray-700">{user.bio}</p>
            
            <div className="flex flex-wrap gap-y-2 mt-3 text-sm text-gray-600">
              {user.location && (
                <div className="flex items-center mr-4">
                  <MapPin size={16} className="mr-1" />
                  <span>{user.location}</span>
                </div>
              )}
              
              {user.website && (
                <div className="flex items-center mr-4">
                  <LinkIcon size={16} className="mr-1" />
                  <a 
                    href={`https://${user.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-indigo-600 hover:underline"
                  >
                    {user.website}
                  </a>
                </div>
              )}
              
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>Joined {user.joinedDate}</span>
              </div>
            </div>
            
            <div className="flex gap-4 mt-3 text-sm">
              <span>
                <strong className="text-gray-900">{user.following}</strong>{" "}
                Following
              </span>
              <span>
                <strong className="text-gray-900">{user.followers}</strong>{" "}
                Followers
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-0">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
            Follow
          </button>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {user.skills.map(skill => (
            <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
          <button className="bg-white border border-gray-300 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-50">
            + Add Skill
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex -mb-px">
          <button 
            onClick={() => setActiveTab("posts")} 
            className={`py-3 px-4 text-sm font-medium border-b-2 ${
              activeTab === "posts" 
                ? "border-indigo-600 text-indigo-600" 
                : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
            }`}
          >
            Posts
          </button>
          <button 
            onClick={() => setActiveTab("learning-plans")} 
            className={`py-3 px-4 text-sm font-medium border-b-2 ${
              activeTab === "learning-plans" 
                ? "border-indigo-600 text-indigo-600" 
                : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
            }`}
          >
            Learning Plans
          </button>
          <button 
            onClick={() => setActiveTab("progress")} 
            className={`py-3 px-4 text-sm font-medium border-b-2 ${
              activeTab === "progress" 
                ? "border-indigo-600 text-indigo-600" 
                : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
            }`}
          >
            Progress Updates
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "posts" && (
        <div>
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {activeTab === "learning-plans" && (
        <div className="space-y-4">
          {learningPlans.map(plan => (
            <div key={plan.id} className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-medium text-lg text-gray-900">
                {plan.title}
              </h3>
              <p className="text-gray-600 mt-1">{plan.description}</p>
              
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-gray-900 font-medium">
                    {plan.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full" 
                    style={{ width: `${plan.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-between mt-4 text-sm text-gray-600">
                <div>
                  <span className="block text-gray-500">Start Date</span>
                  <span>{new Date(plan.startDate).toLocaleDateString()}</span>
                </div>
                <div className="text-right">
                  <span className="block text-gray-500">End Date</span>
                  <span>{new Date(plan.endDate).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-800">
                  View Details
                </button>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-800">
                  Update Progress
                </button>
              </div>
            </div>
          ))}
          
          <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
            + Create New Learning Plan
          </button>
        </div>
      )}

      {activeTab === "progress" && (
        <div className="text-center py-10">
          <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-gray-500"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">
            No progress updates yet
          </h3>
          <p className="text-gray-600 mt-1">
            Share your learning journey by creating your first progress update.
          </p>
          <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Create Progress Update
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;