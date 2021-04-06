import { useRouter } from "next/router";

const Blog = (props) => {
    const router = useRouter();
    console.log(router);
    return (
        <main>
            <h1>Blog</h1>
        </main>
    );
};

export default Blog;
