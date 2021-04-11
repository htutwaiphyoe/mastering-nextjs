import Head from "next/head";

import EventList from "../components/EventList/EventList";
import { getFeaturedEvents } from "../helpers/api";

const FeatureEvents = (props) => {
    return (
        <section>
            <Head>
                <title>Home | NextEvents</title>
                <meta
                    name="description"
                    content="Grap your opportunities for brighter future with our special events. We hold both soft and hard skills development trainings."
                />
            </Head>
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
