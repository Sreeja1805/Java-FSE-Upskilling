// Sample event list
const events = [
    { id: 1, name: 'Conference', date: '2024-07-01' },
    { id: 2, name: 'Workshop', date: '2024-07-02' },
    { id: 3, name: 'Meetup', date: '2024-07-03' }
];

// Function to filter events by name, with default parameter
const filterEventsByName = (eventList = [], eventName = '') => {
    // Clone event list using spread operator
    const clonedList = [...eventList];
    return clonedList.filter(({ name }) => name === eventName);
};

// Example usage
const [firstEvent] = events;
const { id, name, date } = firstEvent; // Destructuring

console.log(`First event: ${name} (ID: ${id}) on ${date}`);

const filtered = filterEventsByName(events, 'Workshop');
console.log(filtered);