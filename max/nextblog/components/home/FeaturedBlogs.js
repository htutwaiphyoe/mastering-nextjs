import BlogGrid from "../blogs/BlogGrid";
import classes from "./FeaturedBlogs.module.css";

function FeaturedBlogs(props) {
    return (
        <section className={classes.latest}>
            <h2>Featured Blogs</h2>
            <BlogGrid blogs={props.blogs} />
        </section>
    );
}

export default FeaturedBlogs;
