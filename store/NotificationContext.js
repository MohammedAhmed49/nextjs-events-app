import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData) => {},
  hideNotification: () => {},
});

export const NotificationContextProvider = (props) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (notificationData) => {
    setNotification(notificationData);
  };

  const hideNotification = () => {
    setNotification(null);
  };

  const value = {
    notification,
    showNotification,
    hideNotification,
  };
  return (
    <NotificationContext.Provider value={value}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
