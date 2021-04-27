import BlogGrid from "./BlogGrid";
import classes from "./AllBlogs.module.css";
function AllBlogs(props) {
    return (
        <section className={classes.blogs}>
            <h1>All Blogs</h1>
            <BlogGrid blogs={props.blogs} />
        </section>
    );
}

export default AllBlogs;
