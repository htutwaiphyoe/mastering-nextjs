import Image from "next/image";

import ScrollTracker from "../../ui/ScrollTracker/ScrollTracker";
import classes from "./BlogHeader.module.css";

function BlogHeader(props) {
    const { title, image } = props;
    return (
        <div className={classes.header}>
            <ScrollTracker />
            <h1>{title}</h1>
            <Image src={image} alt={title} width={200} height={150} />
        </div>
    );
}

export default BlogHeader;
