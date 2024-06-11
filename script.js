document.addEventListener("DOMContentLoaded", () => {
    const blogForm = document.getElementById("blogForm");
    const toggleMode = document.getElementById("toggleMode");
    const backButton = document.getElementById("backButton");
    const postsContainer = document.getElementById("postsContainer");

    if (blogForm) {
        blogForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const title = document.getElementById("title").value;
            const content = document.getElementById("content").value;

            if (username && title && content) {
                const posts = JSON.parse(localStorage.getItem("posts")) || [];
                posts.push({ username, title, content });
                localStorage.setItem("posts", JSON.stringify(posts));
                window.location.href = "posts.html";
            } else {
                alert("Please complete the form.");
            }
        });
    }

    if (postsContainer) {
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.className = "post";
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><p>Posted by: ${post.username}</p>`;
            postsContainer.appendChild(postElement);
        });
    }

    if (toggleMode) {
        toggleMode.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            toggleMode.textContent = document.body.classList.contains("dark-mode") ? "🌜" : "🌞";
        });
    }

    if (backButton) {
        backButton.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
});
