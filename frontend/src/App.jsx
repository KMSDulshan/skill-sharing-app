import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import Resource from "./pages/resource/Resource";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // For demo purposes, set to true
  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4 md:p-6">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/resources" element={<Resource />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
