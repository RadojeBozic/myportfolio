/*************  BLOG *********************/

/* document.addEventListener("DOMContentLoaded", () => {
    // Load blog articles
    fetch("backend/get_articles.php")
        .then((response) => response.json())
        .then((data) => {
            const container = document.getElementById("articles-container");
            data.forEach((article) => {
                const articleElement = document.createElement("div");
                articleElement.classList.add("article");
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>Autor: ${article.author}</p>
                    <p>Objavljeno: ${article.date}</p>
                    <button class="like-btn">👍 Lajkuj</button>
                    <button class="comment-btn">💬 Komentariši</button>
                `;
                container.appendChild(articleElement);
            });
        });

    // Registration form submission
    document.getElementById("registration-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        fetch("backend/register.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((result) => {
                alert(result);
                e.target.reset();
            });
    });
});

   */