import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";

// TypeScript interface for notification
interface Notification {
  id: number;
  message: string;
  batch: number;
  isRead: boolean;
}

const Notification: React.FC = () => {
  // State to toggle notification visibility
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  // State to store notifications fetched from API or mock data
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Function to fetch notifications (simulated API call)
  const fetchNotifications = async () => {
    // Simulating a delay for an API call
    const mockNotifications: Notification[] = [
      { id: 1, message: "New comment on your post", batch: 1, isRead: false },
      { id: 2, message: "Someone liked your photo", batch: 2, isRead: false },
      { id: 3, message: "New follower added", batch: 1, isRead: true },
      { id: 4, message: "Your post has been shared", batch: 3, isRead: false },
      { id: 5, message: "New update available", batch: 2, isRead: true },
    ];

    // Simulating a network delay
    setTimeout(() => {
      setNotifications(mockNotifications);
    }, 1000);
  };

  // UseEffect to fetch notifications on component mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  // Function to handle bell click event (toggle notifications visibility)
  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  // Unread notifications count
  const unreadCount = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  return (
    <div className="notification-bell">
      <div onClick={toggleNotifications} className="bell-icon">
        <FaBell size={30} />
        {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
      </div>

      {showNotifications && (
        <div className="notification-list">
          <h4>Notifications</h4>
          {notifications.length === 0 ? (
            <p>No new notifications</p>
          ) : (
            notifications.map((notification) => (
              <div key={notification.id} className="notification-item">
                <p>{notification.message}</p>
                <span className="batch-number">
                  Batch #{notification.batch}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;
