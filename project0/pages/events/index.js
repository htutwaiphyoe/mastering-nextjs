import { getAllEvents } from "../../dev-data/dummy-data";
import EventList from "../../components/EventList/EventList";
const AllEvents = (props) => {
    const allEvents = getAllEvents();
    return (
        <section>
            <EventList items={allEvents} />
        </section>
    );
};

export default AllEvents;
