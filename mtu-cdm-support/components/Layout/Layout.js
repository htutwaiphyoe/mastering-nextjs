import { Fragment } from "react";
import Head from "next/head";

import Navigation from "../Navigation/Navigation";
const Layout = (props) => {
    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" href="/logo192.png" />
                <meta name="keywords" content="mtu cdm support" />
                <meta name="theme-color" content="#fff" />
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="MTU Students' Union formed a CDM Support Team to help CDM servents in Mandalay Technological University. CDM Support Team is collecting money from students and other donars and providing monthly for their salary."
                />

                <meta
                    property="og:description"
                    content="MTU Students' Union formed a CDM Support Team to help CDM servents in Mandalay Technological University. CDM Support Team is collecting money from donors and providing monthly."
                />

                <meta property="og:site_name" content="MTU CDM Support" />
                <meta name="og:title" property="og:title" content="MTU CDM Support" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://mtucdmsupport.vercel.app/" />
                <meta property="og:url" content="https://mtucdmsupport.vercel.app/" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MTU CDM Support" />
                <meta
                    name="twitter:description"
                    content="MTU Students' Union formed a CDM Support Team to help CDM servents in Mandalay Technological University. CDM Support Team is collecting money from donors and providing monthly."
                />
                <meta name="twitter:image" content="/logo192.png" />
                <meta name="og:image" content="/logo192.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
                    rel="stylesheet"
                />
                <title>MTU CDM Support</title>
            </Head>
            <Navigation />
            <main>{props.children}</main>
        </Fragment>
    );
};

export default Layout;
