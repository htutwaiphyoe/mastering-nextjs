import EventItem from "./EventItem/EventItem";

import classes from "./EventList.module.css";
const EventList = ({ items }) => {
    return (
        <ul className={classes.list}>
            {items.map((item) => (
                <EventItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    location={item.location}
                    date={item.date}
                    image={item.image}
                />
            ))}
        </ul>
    );
};

export default EventList;
