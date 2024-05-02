import Image from "next/image";

import AddressIcon from "../../shared/icons/AddressIcon";
import ArrowRightIcon from "../../shared/icons/ArrowRightIcon";
import DateIcon from "../../shared/icons/DateIcon";
import Button from "../../shared/Button/Button";
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
            <Image src={`/${image}`} alt={title} width={300} height={200} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{formatedDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formatedLocation}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={link}>
                        <span>Explore event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
