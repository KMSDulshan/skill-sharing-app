import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import axios from "axios";

const AddResource = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    if (!file) return alert("Please select a file.");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    //formData.append("tags", tags);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/resources/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload success:", response.data);
      alert("Resource uploaded successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload resource.");
      window.location.reload();
    }
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Upload and share any learning resource
        </h1>
      </div>

      <div className="mb-6 bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex flex-col gap-3 w-full max-w-xl mx-auto">
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
            <label className="text-gray-600 font-medium">Upload File:</label>
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

          <button
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-full font-semibold transition"
          >
            Add Resource
          </button>
        </div>
      </div>
    </>
  );
};

export default AddResource;
