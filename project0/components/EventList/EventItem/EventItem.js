import Link from "next/link";
import classes from "./EventItem.module.css";

const EventItem = ({ title, id, image, location, date }) => {
    const formatedDate = new Date(date).toLocaleDateString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formatedLocation = location.replace(", ", "\n");
    const link = `/events/${id}`;
    return (
        <li className={classes.item}>
            <img src={`/${image}`} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <time>{formatedDate}</time>
                    </div>
                    <div className={classes.address}>
                        <address>{formatedLocation}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link href={link}>Explore event</Link>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
