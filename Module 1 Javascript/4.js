/**
 * Event management module using closures and callbacks.
 */

// Store events and registrations in closure
function createEventManager() {
    const events = [];
    const registrations = {};

    // Add a new event
    function addEvent(event) {
        events.push(event);
        // Initialize registration count for category if not present
        if (!registrations[event.category]) {
            registrations[event.category] = 0;
        }
    }

    // Register a user for an event, track by category
    function registerUser(eventId, user) {
        const event = events.find(e => e.id === eventId);
        if (event) {
            if (!event.users) event.users = [];
            event.users.push(user);
            registrations[event.category]++;
            return true;
        }
        return false;
    }

    // Filter events by category, with dynamic callback for search
    function filterEventsByCategory(category, callback) {
        const filtered = events.filter(e => e.category === category);
        if (typeof callback === 'function') {
            return filtered.filter(callback);
        }
        return filtered;
    }

    // Closure: get total registrations for a category
    function getTotalRegistrations(category) {
        return registrations[category] || 0;
    }

    return {
        addEvent,
        registerUser,
        filterEventsByCategory,
        getTotalRegistrations
    };
}

// Usage example:
const eventManager = createEventManager();

eventManager.addEvent({ id: 1, name: "JS Workshop", category: "Programming" });
eventManager.addEvent({ id: 2, name: "React Meetup", category: "Programming" });
eventManager.addEvent({ id: 3, name: "Art Expo", category: "Art" });

eventManager.registerUser(1, { name: "Alice" });
eventManager.registerUser(2, { name: "Bob" });
eventManager.registerUser(3, { name: "Charlie" });

const programmingEvents = eventManager.filterEventsByCategory("Programming", event => event.name.includes("React"));

console.log(programmingEvents); // [{ id: 2, name: "React Meetup", category: "Programming", users: [ { name: "Bob" } ] }]
console.log(eventManager.getTotalRegistrations("Programming")); // 2