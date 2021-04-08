import { useRouter } from "next/router";
import { Fragment } from "react";

import { getEventById } from "../../dev-data/dummy-data";
import EventContent from "../../components/EventDetail/EventContent";
import EventSummary from "../../components/EventDetail/EventSummary";
import EventLogistics from "../../components/EventDetail/EventLogistics";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";

const EventDetail = (props) => {
    const router = useRouter();
    const event = getEventById(router.query.id);

    if (!event) {
        return (
            <ErrorAlert>
                <p className="center">404 | No event found</p>
            </ErrorAlert>
        );
    }
    return (
        <Fragment>
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

export default EventDetail;
