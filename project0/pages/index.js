import { getFeaturedEvents } from "../dev-data/dummy-data";
import EventList from "../components/EventList/EventList";

const FeatureEvents = (props) => {
    const featuredEvents = getFeaturedEvents();
    return (
        <section>
            <EventList items={featuredEvents} />
        </section>
    );
};

export default FeatureEvents;
