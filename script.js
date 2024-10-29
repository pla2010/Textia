document.addEventListener('DOMContentLoaded', () => {
    // Fonction d'inscription
    document.getElementById('register-form').onsubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();
        document.getElementById('message').textContent = result.message;
    };

    // Fonction de connexion
    document.getElementById('login-form').onsubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();
        document.getElementById('message').textContent = result.message;
    };
});
