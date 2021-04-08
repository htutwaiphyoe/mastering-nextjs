import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dev-data/dummy-data";
import EventList from "../../components/EventList/EventList";
const FilteredEvents = (props) => {
    const router = useRouter();
    const filteredData = router.query.slug;
    if (!filteredData) {
        return <p className="center">Loading...</p>;
    }

    const items = getFilteredEvents({ year: +filteredData[0], month: +filteredData[1] });
    if (items.length === 0) {
        return <p className="center">No events available in that time</p>;
    }
    return (
        <section>
            <EventList items={items} />
        </section>
    );
};

export default FilteredEvents;
