import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
      <h2 className="text-lg font-bold">{post.author.name}</h2>
      <p className="text-gray-600">{post.content}</p>
    </div>
  );
};

export default PostCard;
