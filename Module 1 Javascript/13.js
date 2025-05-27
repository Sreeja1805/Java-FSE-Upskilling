// Select the registration form
const form = document.querySelector('form#registrationForm'); // Update selector as needed

if (form) {
	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		console.log('Form submission started');

		// Collect form data
		const formData = new FormData(form);
		const data = {};
		formData.forEach((value, key) => {
			data[key] = value;
		});
		console.log('Form data:', data);

		try {
			// Log fetch request payload
			const response = await fetch('/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			console.log('Fetch request sent:', JSON.stringify(data));

			if (!response.ok) {
				console.error('Registration failed:', response.status, response.statusText);
			} else {
				const result = await response.json();
				console.log('Registration successful:', result);
			}
		} catch (error) {
			console.error('Error during registration:', error);
		}
	});
} else {
	console.error('Registration form not found');
}
