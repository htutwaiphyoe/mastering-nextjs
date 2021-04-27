import { Fragment } from "react";

import Hero from "../components/home/Hero";
import FeaturedBlogs from "../components/home/FeaturedBlogs";

const DUMMY_BLOGS = [
    {
        title: "Getting started with NextJS",
        slug: "getting-started-with-nextjs",
        excerpt:
            "Next.js gives you the best developer experience with all the features you need for production ",
        date: "2021-10-3",
        image: "cover.png",
    },
    {
        title: "Getting started with NextJS",
        slug: "getting-started-with-nextjs",
        excerpt:
            "Next.js gives you the best developer experience with all the features you need for production",
        date: "2021-10-3",
        image: "cover.png",
    },
    {
        title: "Getting started with NextJS",
        slug: "getting-started-with-nextjs",
        excerpt:
            "Next.js gives you the best developer experience with all the features you need for production",
        date: "2021-10-3",
        image: "cover.png",
    },
    {
        title: "Getting started with NextJS",
        slug: "getting-started-with-nextjs",
        excerpt:
            "Next.js gives you the best developer experience with all the features you need for production",
        date: "2021-10-3",
        image: "cover.png",
    },
];
function Home() {
    return (
        <Fragment>
            <Hero />
            <FeaturedBlogs blogs={DUMMY_BLOGS} />
        </Fragment>
    );
}

export default Home;
