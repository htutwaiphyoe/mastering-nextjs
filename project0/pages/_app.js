import Head from "next/head";

import Layout from "../components/Layout/Layout";

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
            </Layout>
        </NotificationContextProvider>
    );
}

export default App;
