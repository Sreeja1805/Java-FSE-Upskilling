const events = [
    { id: 1, title: "Music Concert", date: "2024-07-10", registered: false },
    { id: 2, title: "Art Exhibition", date: "2024-07-15", registered: false },
    { id: 3, title: "Tech Meetup", date: "2024-07-20", registered: false }
];

// Create a container for events
const container = document.createElement('div');
container.id = 'events-container';
document.body.appendChild(container);

function renderEvents() {
    container.innerHTML = ''; // Clear previous content

    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.style.border = '1px solid #ccc';
        card.style.padding = '16px';
        card.style.margin = '8px 0';

        const title = document.createElement('h3');
        title.textContent = event.title;

        const date = document.createElement('p');
        date.textContent = `Date: ${event.date}`;

        const button = document.createElement('button');
        button.textContent = event.registered ? 'Cancel Registration' : 'Register';
        button.style.marginTop = '8px';
        button.addEventListener('click', () => {
            event.registered = !event.registered;
            renderEvents();
        });

        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(button);

        container.appendChild(card);
    });
}

// Initial render
renderEvents();