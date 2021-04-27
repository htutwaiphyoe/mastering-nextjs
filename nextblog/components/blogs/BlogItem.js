import Link from "next/link";
import Image from "next/image";

import classes from "./BlogItem.module.css";
function BlogItem(props) {
    const { title, slug, excerpt, date, image } = props.blog;
    const imagePath = `/images/blogs/${slug}/${image}`;
    const formatedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const link = `/blogs/${slug}`;
    return (
        <li className={classes.blog}>
            <Link href={link}>
                <a>
                    <div className={classes.image}>
                        <Image
                            src={imagePath}
                            alt={title}
                            width={300}
                            height={200}
                            layout="responsive"
                        />
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formatedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
}

export default BlogItem;
