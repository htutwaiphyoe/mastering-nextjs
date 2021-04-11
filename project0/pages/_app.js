import Head from "next/head";

import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
