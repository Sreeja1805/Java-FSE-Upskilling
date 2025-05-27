// Define Event constructor
function Event(name, date, capacity, booked) {
    this.name = name;
    this.date = date;
    this.capacity = capacity;
    this.booked = booked;
}

// Add checkAvailability() to prototype
Event.prototype.checkAvailability = function() {
    return this.capacity - this.booked > 0;
};

// Create an event object
const concert = new Event("Music Concert", "2024-07-15", 100, 75);

// List object keys and values using Object.entries()
console.log("Event details:");
for (const [key, value] of Object.entries(concert)) {
    console.log(`${key}: ${value}`);
}

// Check availability
console.log("Is there availability?", concert.checkAvailability());