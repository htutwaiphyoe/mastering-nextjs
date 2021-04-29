import Head from "next/head";

import Layout from "../components/layout/Layout";
import "../style/global.css";

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
