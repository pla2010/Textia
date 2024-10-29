// Inscription
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const response = await fetch('https://ton-url-render.com/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    alert(data.message);
});

// Connexion
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
    if (response.ok) {
        alert(data.message);
        document.getElementById('postForm').style.display = 'block';  // Afficher le formulaire de publication
        localStorage.setItem('user_id', data.user_id);  // Stocke l'ID de l'utilisateur
        loadPosts();  // Charge les publications
    } else {
        alert(data.message);
    }
});

// Créer une Publication
document.getElementById('postForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const content = document.getElementById('postContent').value;
    const user_id = localStorage.getItem('user_id');  // Récupère l'ID de l'utilisateur

    const response = await fetch('https://ton-url-render.com/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, user_id }),
    });

    const data = await response.json();
    alert(data.message);
    loadPosts();  // Recharge les publications après avoir posté
});

// Charger les Publications
async function loadPosts() {
    const response = await fetch('https://ton-url-render.com/api/posts');
    const posts = await response.json();
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';  // Vide le conteneur avant d'ajouter les nouvelles publications

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerText = post.content;
        postsContainer.appendChild(postElement);
    });
}
