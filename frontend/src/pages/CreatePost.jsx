import React, { useState } from "react";
import { XIcon, ImageIcon, VideoIcon, FileTextIcon } from "lucide-react";

const CreatePost = () => {
  const [postType, setPostType] = useState("skill_sharing");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [mediaPreview, setMediaPreview] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    // In a real app, this would submit the post data to an API
    console.log({
      type: postType,
      content,
      tags: tags.split(",").map(tag => tag.trim()),
      media: mediaPreview
    });
  };

  const handleMediaChange = e => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map(file => ({
        url: URL.createObjectURL(file),
        name: file.name,
        type: file.type
      }));
      setMediaPreview(prev => [...prev, ...filesArray].slice(0, 3));
    }
  };

  const removeMedia = index => {
    setMediaPreview(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Create a Post</h1>
        <p className="text-gray-600">
          Share your skills, progress, or learning plan
        </p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <form onSubmit={handleSubmit}>
          {/* Post Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Post Type
            </label>
            <div className="grid grid-cols-3 gap-4">
              <button 
                type="button" 
                onClick={() => setPostType("skill_sharing")} 
                className={`py-3 px-4 border ${
                  postType === "skill_sharing" 
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } rounded-lg text-sm font-medium focus:outline-none`}
              >
                <ImageIcon size={20} className="mx-auto mb-1" />
                Skill Sharing
              </button>
              <button 
                type="button" 
                onClick={() => setPostType("learning_progress")} 
                className={`py-3 px-4 border ${
                  postType === "learning_progress" 
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } rounded-lg text-sm font-medium focus:outline-none`}
              >
                <VideoIcon size={20} className="mx-auto mb-1" />
                Learning Progress
              </button>
              <button 
                type="button" 
                onClick={() => setPostType("learning_plan")} 
                className={`py-3 px-4 border ${
                  postType === "learning_plan" 
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } rounded-lg text-sm font-medium focus:outline-none`}
              >
                <FileTextIcon size={20} className="mx-auto mb-1" />
                Learning Plan
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              {postType === "skill_sharing" 
                ? "Share your knowledge" 
                : postType === "learning_progress" 
                  ? "Share your progress" 
                  : "Describe your learning plan"}
            </label>
            <textarea 
              id="content" 
              rows={5} 
              value={content} 
              onChange={e => setContent(e.target.value)} 
              placeholder={
                postType === "skill_sharing" 
                  ? "Share a skill or technique you've mastered..." 
                  : postType === "learning_progress" 
                    ? "Update others on what you've learned recently..." 
                    : "Outline your learning goals and timeline..."
              } 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
              Tags (comma separated)
            </label>
            <input 
              type="text" 
              id="tags" 
              value={tags} 
              onChange={e => setTags(e.target.value)} 
              placeholder="e.g., webdev, coding, design" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            />
          </div>

          {/* Media Upload (for skill sharing and progress) */}
          {postType !== "learning_plan" && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Add Media (up to 3 photos or videos)
              </label>
              {mediaPreview.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {mediaPreview.map((media, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden h-24 bg-gray-100">
                      {media.type.startsWith("image") ? (
                        <img src={media.url} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                          <VideoIcon size={24} />
                          <span className="ml-2 text-xs">{media.name}</span>
                        </div>
                      )}
                      <button 
                        type="button" 
                        onClick={() => removeMedia(index)} 
                        className="absolute top-1 right-1 bg-gray-800 bg-opacity-70 text-white rounded-full p-1 hover:bg-opacity-100"
                      >
                        <XIcon size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {mediaPreview.length < 3 && (
                <div className="flex items-center justify-center w-full">
                  <label className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-50">
                    <div className="flex flex-col items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-10 w-10 text-gray-400" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                        />
                      </svg>
                      <p className="mt-2 text-sm text-gray-600">
                        <span className="font-medium text-indigo-600 hover:underline">
                          Upload a file
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB (or MP4 up to 30 seconds)
                      </p>
                    </div>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*,video/*" 
                      onChange={handleMediaChange} 
                    />
                  </label>
                </div>
              )}
            </div>
          )}

          {/* Learning Plan Specific Fields */}
          {postType === "learning_plan" && (
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="plan-title" className="block text-sm font-medium text-gray-700 mb-2">
                  Plan Title
                </label>
                <input 
                  type="text" 
                  id="plan-title" 
                  placeholder="e.g., Mastering React in 30 Days" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input 
                    type="date" 
                    id="start-date" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-2">
                    Target End Date
                  </label>
                  <input 
                    type="date" 
                    id="end-date" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="milestones" className="block text-sm font-medium text-gray-700 mb-2">
                  Key Milestones
                </label>
                <textarea 
                  id="milestones" 
                  rows={3} 
                  placeholder="List the key milestones for your learning plan..." 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              <div>
                <label htmlFor="resources" className="block text-sm font-medium text-gray-700 mb-2">
                  Resources
                </label>
                <textarea 
                  id="resources" 
                  rows={3} 
                  placeholder="List books, courses, videos, or other resources you'll use..." 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;