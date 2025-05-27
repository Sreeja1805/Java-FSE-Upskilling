// Initial array of community events
let events = [
    { id: 1, name: "Workshop on Baking", type: "workshop" },
    { id: 2, name: "Jazz Night", type: "music" },
    { id: 3, name: "Art Exhibition", type: "exhibition" },
    { id: 4, name: "Rock Concert", type: "music" }
];

// Add new events using .push()
events.push(
    { id: 5, name: "Coding Bootcamp", type: "workshop" },
    { id: 6, name: "Classical Music Evening", type: "music" }
);

// Use .filter() to show only music events
const musicEvents = events.filter(event => event.type === "music");

// Use .map() to format display cards
const eventCards = events.map(event => `Event: ${event.name} (${event.type})`);

// Output results
console.log("All Events:", events);
console.log("Music Events:", musicEvents);
console.log("Event Cards:", eventCards);