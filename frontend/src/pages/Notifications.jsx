import React from "react";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, UserPlus, Award } from "lucide-react";

const Notifications = () => {
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: "like",
      user: {
        name: "David Kim",
        username: "davidkim",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      content: "liked your post about React hooks",
      time: "2 hours ago",
      read: false,
      postId: 123
    },
    {
      id: 2,
      type: "comment",
      user: {
        name: "Sarah Johnson",
        username: "sarahj",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg"
      },
      content: 'commented on your learning plan: "This is a great approach! I\'d suggest adding..."',
      time: "5 hours ago",
      read: false,
      postId: 456
    },
    {
      id: 3,
      type: "follow",
      user: {
        name: "Michael Torres",
        username: "michaelt",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg"
      },
      content: "started following you",
      time: "1 day ago",
      read: true
    },
    {
      id: 4,
      type: "achievement",
      content: 'You earned the "10 Day Streak" badge for consistent learning updates!',
      time: "2 days ago",
      read: true
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case "like":
        return <Heart size={18} className="text-red-500" />;
      case "comment":
        return <MessageCircle size={18} className="text-blue-500" />;
      case "follow":
        return <UserPlus size={18} className="text-green-500" />;
      case "achievement":
        return <Award size={18} className="text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <p className="text-gray-600">Stay updated on your network activity</p>
      </div>
      
      <div className="space-y-4">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`bg-white rounded-xl border ${
              !notification.read 
                ? "border-indigo-200 bg-indigo-50" 
                : "border-gray-200"
            } p-4`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                {notification.user ? (
                  <img 
                    src={notification.user.avatar} 
                    alt={notification.user.name} 
                    className="w-10 h-10 rounded-full object-cover" 
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    {getNotificationIcon(notification.type)}
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    {notification.user && (
                      <Link 
                        to={`/profile/${notification.user.username}`} 
                        className="font-medium text-gray-900 hover:text-indigo-600"
                      >
                        {notification.user.name}
                      </Link>
                    )}
                    <span className="text-gray-800">
                      {" "}
                      {notification.content}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {notification.time}
                  </span>
                </div>
                
                {notification.postId && (
                  <Link 
                    to={`/post/${notification.postId}`} 
                    className="mt-2 inline-block text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    View post
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;