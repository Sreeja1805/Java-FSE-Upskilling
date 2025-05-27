// Mock API endpoint
const EVENTS_API = 'https://jsonplaceholder.typicode.com/posts';

// Using .then() and .catch()
function fetchEventsWithThen() {
    console.log('Loading events (then/catch)...');
    fetch(EVENTS_API)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            console.log('Events fetched (then/catch):', data.slice(0, 5));
        })
        .catch(error => {
            console.error('Error fetching events (then/catch):', error);
        });
}

// Using async/await and showing a loading spinner
async function fetchEventsWithAsyncAwait() {
    const spinner = document.createElement('div');
    spinner.textContent = 'Loading events...';
    document.body.appendChild(spinner);

    try {
        const response = await fetch(EVENTS_API);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('Events fetched (async/await):', data.slice(0, 5));
    } catch (error) {
        console.error('Error fetching events (async/await):', error);
    } finally {
        spinner.remove();
    }
}

// Run both examples
fetchEventsWithThen();
fetchEventsWithAsyncAwait();