const events = [
    { name: "JavaScript Workshop", date: "2024-07-10", seats: 5 },
    { name: "React Conference", date: "2024-05-01", seats: 0 },
    { name: "Node.js Meetup", date: "2024-08-15", seats: 10 },
    { name: "Past Event", date: "2023-12-01", seats: 20 }
];

const today = new Date();

events.forEach(event => {
    const eventDate = new Date(event.date);
    if (eventDate > today && event.seats > 0) {
        console.log(`Event: ${event.name}, Date: ${event.date}, Seats: ${event.seats}`);
        try {
            registerForEvent(event);
        } catch (error) {
            console.error(`Registration failed for ${event.name}: ${error.message}`);
        }
    } else {
        // Hide past or full events (do nothing)
    }
});

function registerForEvent(event) {
    if (event.seats <= 0) {
        throw new Error("No seats available");
    }
    // Simulate registration logic
    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
}