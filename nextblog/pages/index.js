import { Fragment } from "react";

import { getFeaturedBlogs } from "../utils/blogUtils";
import Hero from "../components/home/Hero";
import FeaturedBlogs from "../components/home/FeaturedBlogs";

function Home(props) {
    return (
        <Fragment>
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
