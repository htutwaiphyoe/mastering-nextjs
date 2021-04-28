import { getAllBlogs } from "../../utils/blogUtils";
import AllBlogs from "../../components/blogs/AllBlogs";
function AllBlogsPage(props) {
    return <AllBlogs blogs={props.allBlogs} />;
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
