import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Notification from "../components/shared/Notification/Notification";
import { NotificationContextProvider } from "../context/notificationContext";
import "../styles/globals.css";

function App({ Component, pageProps }) {
    return (
        <NotificationContextProvider>
            <Layout>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <Component {...pageProps} />
                <Notification title="test" status="error" message="test" />
            </Layout>
        </NotificationContextProvider>
    );
}

export default App;
