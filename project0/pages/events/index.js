import { useRouter } from "next/router";

import { getAllEvents } from "../../helpers/api";
import EventList from "../../components/EventList/EventList";
import EventSearch from "../../components/EventSearch/EventSearch";
const AllEvents = (props) => {
    const router = useRouter();

    const searchEvents = (year, month) => {
        router.push(`/events/${year}/${month}`);
    };
    return (
        <section>
            <EventSearch onSearch={searchEvents} />
            <EventList items={props.allEvents} />
        </section>
    );
};

export async function getStaticProps(context) {
    const response = await getAllEvents();
    return {
        props: {
            allEvents: response,
        },
        revalidate: 60,
    };
}

export default AllEvents;
