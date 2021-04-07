import { getFeaturedEvents } from "../dev-data/dummy-data";
import EventList from "../components/EventList/EventList";

const FeatureEvents = (props) => {
    const featuredEvents = getFeaturedEvents();
    return (
        <main>
            <EventList items={featuredEvents} />
        </main>
    );
};

export default FeatureEvents;
