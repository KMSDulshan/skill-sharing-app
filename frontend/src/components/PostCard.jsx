import { useState } from "react";
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal } from "lucide-react";

// Sample data for demonstration
const samplePost = {
  author: {
    name: "Jane Doe",
    username: "janedoe",
    title: "UX Designer",
    avatar: "/api/placeholder/64/64"
  },
  content: "Just finished my latest design project! What do you think?",
  tags: ["design", "ux", "portfolio"],
  media: ["/api/placeholder/600/400", "/api/placeholder/600/400"],
  likes: 24,
  comments: [
    {
      author: {
        name: "John Smith",
        avatar: "/api/placeholder/64/64"
      },
      content: "Looks amazing! Love the color scheme.",
      time: "2h ago"
    },
    {
      author: {
        name: "Sarah Johnson",
        avatar: "/api/placeholder/64/64"
      },
      content: "Great work! The layout is really intuitive.",
      time: "1h ago"
    }
  ]
};

const PostCard = ({ post = samplePost }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);

  // Mock link component since we don't have react-router
  const MockLink = ({ to, className, children }) => (
    <div className={`cursor-pointer ${className}`} onClick={() => console.log(`Navigate to: ${to}`)}>
      {children}
    </div>
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <MockLink to={`/profile/${post.author.username}`} className="flex items-center gap-3">
          <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h3 className="font-medium text-gray-900">{post.author.name}</h3>
            <p className="text-sm text-gray-500">{post.author.title}</p>
          </div>
        </MockLink>
        <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-2">
        <p className="mb-3 text-gray-800">{post.content}</p>
        {post.tags && (
          <div className="flex flex-wrap gap-1 mb-3">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Post Media */}
      {post.media && post.media.length > 0 && (
        <div className={`grid ${post.media.length === 1 ? "" : "grid-cols-2"} gap-1`}>
          {post.media.map((item, index) => (
            <img 
              key={index} 
              src={item} 
              alt={`Post media ${index + 1}`} 
              className="w-full h-64 object-cover" 
            />
          ))}
        </div>
      )}

      {/* Post Stats */}
      <div className="px-4 py-2 flex items-center text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <Heart size={16} className={`${liked ? "fill-red-500 text-red-500" : ""}`} />
          {post.likes + (liked ? 1 : 0)}
        </span>
        <span className="ml-4">{post.comments.length} comments</span>
      </div>

      {/* Post Actions */}
      <div className="flex border-t border-gray-100">
        <button 
          onClick={() => setLiked(!liked)} 
          className={`flex items-center justify-center gap-2 flex-1 py-2.5 hover:bg-gray-50 transition-colors ${liked ? "text-red-500" : "text-gray-700"}`}
        >
          <Heart size={18} className={liked ? "fill-red-500" : ""} />
          <span className="text-sm font-medium">Like</span>
        </button>
        <button 
          onClick={() => setShowComments(!showComments)} 
          className="flex items-center justify-center gap-2 flex-1 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <MessageCircle size={18} />
          <span className="text-sm font-medium">Comment</span>
        </button>
        <button className="flex items-center justify-center gap-2 flex-1 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors">
          <Share size={18} />
          <span className="text-sm font-medium">Share</span>
        </button>
        <button 
          onClick={() => setSaved(!saved)} 
          className={`flex items-center justify-center gap-2 flex-1 py-2.5 hover:bg-gray-50 transition-colors ${saved ? "text-indigo-600" : "text-gray-700"}`}
        >
          <Bookmark size={18} className={saved ? "fill-indigo-600" : ""} />
          <span className="text-sm font-medium">Save</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="border-t border-gray-100 p-4">
          <div className="flex items-start gap-3 mb-4">
            <img 
              src="/api/placeholder/64/64" 
              alt="Current user" 
              className="w-8 h-8 rounded-full object-cover" 
            />
            <input 
              type="text" 
              placeholder="Add a comment..." 
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            />
          </div>
          
          {post.comments.map((comment, index) => (
            <div key={index} className="flex items-start gap-3 mb-3">
              <img 
                src={comment.author.avatar} 
                alt={comment.author.name} 
                className="w-8 h-8 rounded-full object-cover" 
              />
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg px-3 py-2">
                  <p className="font-medium text-sm text-gray-900">
                    {comment.author.name}
                  </p>
                  <p className="text-sm text-gray-800">{comment.content}</p>
                </div>
                <div className="flex gap-4 mt-1 ml-1 text-xs text-gray-500">
                  <button>Like</button>
                  <button>Reply</button>
                  <span>{comment.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;