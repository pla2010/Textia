document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const response = await fetch('https://textia-serv.onrender.com/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    alert(data.message);
});

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('https://ton-url-render.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    alert(data.message);
});
