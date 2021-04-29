import { Fragment } from "react";
import Head from "next/head";

import { getFeaturedBlogs } from "../utils/blogUtils";
import Hero from "../components/home/Hero";
import FeaturedBlogs from "../components/home/FeaturedBlogs";

function Home(props) {
    return (
        <Fragment>
            <Head>
                <meta
                    name="description"
                    content="I wrote ariticles for computer science and web development especially JavaScript and its frameworks MERN Stack."
                />
                <title>HWP's Blog</title>
            </Head>
            <Hero />
            <FeaturedBlogs blogs={props.featuredBlogs} />
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const featuredBlogs = getFeaturedBlogs();

    return {
        props: {
            featuredBlogs,
        },
    };
}

export default Home;
