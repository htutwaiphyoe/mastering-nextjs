import { useRouter } from "next/router";

import { getAllEvents } from "../../dev-data/dummy-data";
import EventList from "../../components/EventList/EventList";
import EventSearch from "../../components/EventSearch/EventSearch";
const AllEvents = (props) => {
    const router = useRouter();
    const allEvents = getAllEvents();
    const searchEvents = (year, month) => {
        router.push(`/events/${year}/${month}`);
    };
    return (
        <section>
            <EventSearch onSearch={searchEvents} />
            <EventList items={allEvents} />
        </section>
    );
};

export default AllEvents;
