import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import axios from "axios";

const ResourceCard = ({ resource }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [modalOpen, setModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState(null);

  const deleteResource = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/resources/${id}`
      );
      alert("Deleted successfully:", response.data);
      window.location.reload();
      return response.data;
    } catch (error) {
      alert("Error deleting resource");
      console.error("Error deleting resource:", error);
      window.location.reload();
      throw error;
    }
  };

  const openUpdateModal = () => {
    setTitle(resource.title || "");
    setDescription(resource.description || "");
    setFile(null);
    setModalOpen(true);
    setMenuOpen(false);
  };

  const updateResource = async (id) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    //formData.append("tags", tags);
    formData.append("file", file);
    try {
      const response = await axios.put(
        `http://localhost:8080/api/resources/${id}`,
        formData
      );
      alert("Updated successfully:", response.data);
      console.log("Updated successfully:", response.data);
      window.location.reload();
      return response.data;
    } catch (error) {
      console.error("Error updating resource:", error);
      alert("Error updating resource:", error);
      window.location.reload();
      throw error;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="font-medium text-gray-900">{resource.title}</h3>
        </div>

        <button
          className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
          onClick={toggleMenu}
        >
          <MoreHorizontal size={20} />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
              onClick={() => {
                deleteResource(resource.id);
                setMenuOpen(false);
              }}
            >
              Delete
            </button>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-blue-600"
              onClick={() => {
                openUpdateModal();
              }}
            >
              Update
            </button>
          </div>
        )}
      </div>

      <div>
        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-xl w-full max-w-xl">
              <h2 className="text-xl font-semibold mb-4">Update Resource</h2>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Title of the learning material..."
                  className="bg-gray-100 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                  placeholder="Brief description of the learning material"
                  rows={4}
                  className="bg-gray-100 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Categories and tags"
                  className="bg-gray-100 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />

                <div className="flex items-center justify-between bg-gray-100 rounded-xl px-4 py-3">
                  <label className="text-gray-600 font-medium">
                    Upload File:
                  </label>
                  <input
                    type="file"
                    className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-indigo-500 file:text-white
                    hover:file:bg-indigo-600"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => updateResource(resource.id)}
                    className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-4 pb-2">
        <p className="mb-3 text-gray-800"> {resource.description}</p>
        {/* {post.tags && (
          <div className="flex flex-wrap gap-1 mb-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        )} */}
      </div>

      {resource.mediaType === "image" && (
        <img
          src={`http://localhost:8080${resource.mediaUrl}`}
          alt={`Post media ${resource.title}`}
          className="w-full h-64 object-cover"
        />
      )}

      {resource.mediaType === "video" && (
        <video controls className="w-full h-64 object-cover">
          <source
            src={`http://localhost:8080${resource.mediaUrl}`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}

      {resource.mediaType === "pdf" && (
        <iframe
          src={`http://localhost:8080${resource.mediaUrl}`}
          title={`PDF for ${resource.title}`}
          className="w-full h-64"
        >
          PDF cannot be displayed
        </iframe>
      )}
    </div>
  );
};

export default ResourceCard;
