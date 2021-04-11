import EventList from "../components/EventList/EventList";
import { getFeaturedEvents } from "../helpers/api";

const FeatureEvents = (props) => {
    return (
        <section>
            <EventList items={props.featuredEvents} />
        </section>
    );
};

export async function getStaticProps(context) {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            featuredEvents,
        },
        revalidate: 1800,
    };
}
export default FeatureEvents;
