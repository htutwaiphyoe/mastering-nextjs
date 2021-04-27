import { Fragment } from "react";

import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts";
function Home() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts />
        </Fragment>
    );
}

export default Home;
