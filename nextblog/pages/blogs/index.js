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
                    content="Blogs by HWP. Ariticles for computer science and web development especially JavaScript and its frameworks MERN Stack."
                />
                <title>All Blogs - Blogs by HWP</title>
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
