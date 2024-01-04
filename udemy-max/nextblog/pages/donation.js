import Head from "next/head";

import Donation from "../components/Donation/Donation";

const DonationPage = (props) => {
    return (
        <>
            <Head>
                <meta name="description" content="Support our people by ourselves" />
                <title>Donation | Htut Wai Phyoe</title>
            </Head>
            <Donation />
        </>
    );
};

export default DonationPage;
