import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
    return (
        <Fragment>
            <Head>
                <meta name="description" content="Contact me" />
                <title>Contact me | Htut Wai Phyoe</title>
            </Head>
            <ContactForm />
        </Fragment>
    );
}

export default Contact;
