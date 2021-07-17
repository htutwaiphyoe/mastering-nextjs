import { Fragment } from "react";
import Head from "next/head";

import { getAllBlogs } from "../../utils/blogUtils";
import AllBlogs from "../../components/blogs/AllBlogs";

function AllBlogsPage(props) {
    return (
        <Fragment>
            <Head>
                <meta
                    name="description"
                    content="Htut Wai Phyoe. Web Developer. Ariticles for computer science and web development especially JavaScript and its frameworks MERN Stack."
                />
                <title>All Blogs - Htut Wai Phyoe</title>
            </Head>
            <AllBlogs blogs={props.allBlogs} />
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const allBlogs = getAllBlogs();
    return {
        props: {
            allBlogs,
        },
    };
}

export default AllBlogsPage;
