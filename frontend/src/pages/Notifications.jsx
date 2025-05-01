import React from "react";

const Notifications = () => {
  const sampleNotifications = [
    { id: 1, message: "Your profile has been updated successfully.", time: "2 hours ago" },
    { id: 2, message: "You have a new message from John.", time: "1 day ago" },
    { id: 3, message: "Your subscription will expire in 3 days.", time: "3 days ago" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Notifications</h1>
      <div className="space-y-4">
        {sampleNotifications.map((notification) => (
          <div
            key={notification.id}
            className="p-4 border rounded-lg shadow-sm bg-white hover:bg-gray-50 transition"
          >
            <p className="text-lg font-medium">{notification.message}</p>
            <p className="text-sm text-gray-500">{notification.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
