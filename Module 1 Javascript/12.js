// Simulated user registration data
const userData = {
    username: "testuser",
    email: "testuser@example.com",
    password: "securepassword123"
};

// Function to simulate delayed fetch POST request
function registerUser(data) {
    // Simulate delay with setTimeout
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.ok) {
                        resolve("Registration successful!");
                    } else {
                        reject("Registration failed. Please try again.");
                    }
                })
                .catch(() => {
                    reject("Network error. Please try again.");
                });
        }, 2000); // 2 second delay
    });
}

// Usage example
registerUser(userData)
    .then(message => {
        console.log(message);
        // You can also update the DOM here if needed
    })
    .catch(error => {
        console.error(error);
        // You can also show error message in the UI
    });