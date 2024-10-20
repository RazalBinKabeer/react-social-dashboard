import { useNotification } from "../../context/NotificationContext";

const Notifications = () => {
  const { notifications } = useNotification();

  return (
    <div className="p-5 bg-white bg-opacity-80 rounded-lg shadow m-5">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <ul>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <li key={notification.id} className="mb-2 bg-gray-200 p-2 rounded">
              {notification.message}
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No notifications available.
          </p>
        )}
      </ul>
    </div>
  );
};

export default Notifications;
