import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dev-data/dummy-data";
import EventList from "../../components/EventList/EventList";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
const FilteredEvents = (props) => {
    const router = useRouter();
    const filteredData = router.query.slug;
    if (!filteredData) {
        return (
            <ErrorAlert>
                <p className="center">Loading...</p>
            </ErrorAlert>
        );
    }

    const items = getFilteredEvents({ year: +filteredData[0], month: +filteredData[1] });
    if (items.length === 0) {
        return (
            <ErrorAlert>
                <p className="center">No events available in that time</p>
            </ErrorAlert>
        );
    }
    return (
        <section>
            <EventList items={items} />
        </section>
    );
};

export default FilteredEvents;
