import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
    return (
        <Fragment>
            <Head>
                <meta
                    name="description"
                    content="Feel free to send your messages and I'd love them"
                />
                <title>Contact me</title>
            </Head>
            <ContactForm />
        </Fragment>
    );
}

export default Contact;
