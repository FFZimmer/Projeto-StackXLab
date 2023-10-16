let selectedPost = null;

function createPostCards() {
    const postCards = document.getElementById("post-cards");
    postCards.innerHTML = "";
    posts.forEach((post, index) => {
        const card = document.createElement("div");
        card.classList.add("post-card");
        card.innerHTML = `
            <h2>${post.title}</h2>
            <img src="${post.image}" alt="${post.title}">
            <p>Data: ${post.date}</p>
            <button onclick="viewPost(${index})">Ler Mais</button>
        `;
        postCards.appendChild(card);
    });
}

function viewPost(index) {
    selectedPost = index;
    const post = posts[index];
    const postContent = document.getElementById("post-content");
    postContent.innerHTML = `
        <h2>${post.title}</h2>
        <p>Data: ${post.date}</p>
        <img src="${post.image}" alt="${post.title}">
        <p>Categoria: ${post.category}</p>
        <p>Visualizações: ${post.views}</p>
        <p>Autor: Nome do Autor</p>
        <p>${post.content}</p>
        <button onclick="goBack()">Voltar</button>
    `;
    window.location.href = "post.html";
}

function goBack() {
    selectedPost = null;
    const postContent = document.getElementById("post-content");
    postContent.innerHTML = "";
    window.location.href = "index.html";
}

if (selectedPost === null) {
    createPostCards();
} else {
    viewPost(selectedPost);
}
