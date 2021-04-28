import { getFileData, getAllFiles } from "../../utils/blogUtils";

import BlogContent from "../../components/blogs/blogDetail/BlogContent";

function BlogDetail(props) {
    return <BlogContent blog={props.blog} />;
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
