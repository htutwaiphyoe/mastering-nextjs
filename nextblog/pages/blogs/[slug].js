import { Fragment } from "react";
import Head from "next/head";

import { getFileData, getAllFiles } from "../../utils/blogUtils";
import BlogContent from "../../components/blogs/blogDetail/BlogContent";

function BlogDetail(props) {
    return (
        <Fragment>
            <Head>
                <meta name="description" content={props.blog.excerpt} />
                <title>{props.blog.title}</title>
            </Head>
            <BlogContent blog={props.blog} />
        </Fragment>
    );
}
export async function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const blog = getFileData(`${slug}.md`);

    return {
        props: {
            blog,
        },
        revalidate: 600,
    };
}

export async function getStaticPaths() {
    const allFiles = getAllFiles();
    const paths = allFiles.map((file) => ({
        params: {
            slug: file.replace(/\.md$/, ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}
export default BlogDetail;
