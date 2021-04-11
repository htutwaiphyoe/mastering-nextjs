export const getAllEvents = async () => {
    const events = await (
        await fetch("https://burgerbuilder-413b0.firebaseio.com/events.json")
    ).json();
    return events;
};

export const getFeaturedEvents = async () => {
    const events = await getAllEvents();
    return events.filter((el) => el.isFeatured);
};

export const getEventById = async (id) => {
    const events = await getAllEvents();
    return events.find((el) => el.id === id);
};

export const getFilteredEvents = async (year, month) => {
    const response = await getAllEvents();

    return response.filter((event) => {
        const date = new Date(event.date);
        return date.getFullYear() === year && date.getMonth() === month - 1;
    });
};
