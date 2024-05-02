import Head from "next/head";

import EventList from "../../components/EventList/EventList";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import { getFilteredEvents } from "../../helpers/api";

const FilteredEvents = (props) => {
    const { filteredEvents: items } = props;

    if (items.length === 0) {
        return (
            <ErrorAlert>
                <Head>
                    <title>FilteredEvents | NextEvents</title>
                    <meta
                        name="description"
                        content="Grap your opportunities for brighter future with our special events. We hold both soft and hard skills development trainings."
                    />
                </Head>
                <p className="center">No events available in that time</p>
            </ErrorAlert>
        );
    }
    return (
        <section>
            <Head>
                <title>FilteredEvents | NextEvents</title>
                <meta
                    name="description"
                    content="Grap your opportunities for brighter future with our special events. We hold both soft and hard skills development trainings."
                />
            </Head>
            <EventList items={items} />
        </section>
    );
};

export async function getServerSideProps(context) {
    const { params } = context;
    const year = +params.slug[0];
    const month = +params.slug[1];
    const data = await getFilteredEvents(year, month);
    return {
        props: {
            filteredEvents: data,
        },
    };
}
export default FilteredEvents;
