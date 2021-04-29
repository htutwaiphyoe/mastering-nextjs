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
                    content="Here's all my blogs and you will love reading them"
                />
                <title>All Blogs</title>
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
