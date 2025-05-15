import React, { useEffect, useState } from "react";
import ResourceCard from "./ResourceCard";
import axios from "axios";
import AddResource from "./AddResource";

const Resource = () => {
  const [resources, setResources] = useState([]);

  const fetchAllResources = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/resources");
      return response.data;
    } catch (error) {
      console.error("Error fetching resources:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchAllResources()
      .then((data) => setResources(data))
      .catch((err) => console.error("Failed to load resources:", err));
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <AddResource />

      <h1 className="text-2xl font-bold text-gray-900">
        Your latest updates on learning resources
      </h1>
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default Resource;
