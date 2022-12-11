import { Fragment, useContext } from "react";
import NotificationContext from "../../store/NotificationContext";
import Notification from "../UI/notification/Notification";
import Header from "./Header";

const Layout = (props) => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
};

export default Layout;
