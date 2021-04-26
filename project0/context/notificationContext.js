import { createContext, useState } from "react";

const NotificationContext = createContext({
    notification: null,
    showNotification: (data) => {},
    hideNotification: () => {},
});

export const NotificationContextProvider = (props) => {
    const [notification, setNotification] = useState(null);
    const showNotificationHandler = (data) => {
        setNotification(data);
    };
    const hideNotificationHandler = () => {
        setNotification(null);
    };
    return (
        <NotificationContext.Provider
            value={{
                notification,
                showNotification: showNotificationHandler,
                hideNotification: hideNotificationHandler,
            }}
        >
            {props.children}
        </NotificationContext.Provider>
    );
};
export default NotificationContext;
