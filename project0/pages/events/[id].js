import { Fragment } from "react";
import Head from "next/head";

import { getFeaturedEvents, getEventById } from "../../helpers/api";
import EventContent from "../../components/EventDetail/EventContent";
import EventSummary from "../../components/EventDetail/EventSummary";
import EventLogistics from "../../components/EventDetail/EventLogistics";

const EventDetail = (props) => {
    const { event } = props;

    if (!event) {
        return (
            <Fragment>
                <Head>
                    <title>FilteredEvents | NextEvents</title>
                    <meta
                        name="description"
                        content="Grap your opportunities for brighter future with our special events. We hold both soft and hard skills development trainings."
                    />
                </Head>
                <p className="center">Loading...</p>
            </Fragment>
        );
    }
    return (
        <Fragment>
            <Head>
                <title>{event.title} | NextEvents</title>
                <meta name="description" content={event.description} />
            </Head>
            <EventSummary title={event.title} />
            <EventLogistics
                address={event.location}
                date={event.date}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
};

export async function getStaticProps(context) {
    const { params } = context;
    const data = await getEventById(params.id);

    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            event: data,
        },
        revalidate: 30,
    };
}

export async function getStaticPaths() {
    const response = await getFeaturedEvents();
    const data = response.map((el) => ({ params: { id: el.id } }));

    return {
        paths: data,
        fallback: "blocking",
    };
}
export default EventDetail;
