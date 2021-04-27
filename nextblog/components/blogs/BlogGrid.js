import BlogItem from "./BlogItem";

import classes from "./BlogGrid.module.css";

function BlogGrid(props) {
    const { blogs } = props;
    return (
        <ul className={classes.grid}>
            {blogs.map((blog) => (
                <BlogItem blog={blog} key={`${blog.slug} cover`} />
            ))}
        </ul>
    );
}

export default BlogGrid;
