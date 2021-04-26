import { Fragment, useContext } from "react";
import Header from "../Header/Header";
import Notification from "../shared/Notification/Notification";
import NotificationContext from "../../context/notificationContext";

const Layout = (props) => {
    const notificationContext = useContext(NotificationContext);
    const notification = notificationContext.notification;
    return (
        <Fragment>
            <Header />
            <main>{props.children}</main>
            {notification && (
                <Notification
                    title={notification.title}
                    status={notification.status}
                    message={notification.message}
                />
            )}
        </Fragment>
    );
};

export default Layout;
