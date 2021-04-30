import { createContext, useState, useEffect } from "react";

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

    useEffect(() => {
        if (notification && notification.status !== "pending") {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 1000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [notification]);
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
