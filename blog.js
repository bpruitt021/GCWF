// blog.js
async function loadBlog() {
  try {
    const res = await fetch('content/blog.json'); // <-- Updated path
    const posts = await res.json();

    const container = document.getElementById('blog-list');

    posts.forEach(post => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <h3>${post.title}</h3>
        <p><strong>Author:</strong> ${post.author}</p>
        <p><strong>Date:</strong> ${post.date}</p>
        <p>${post.excerpt}</p>
        <a href="blog/${post.link}" class="btn">Read More</a> <!-- Updated path -->
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading blog.json', err);
  }
}

document.addEventListener('DOMContentLoaded', loadBlog);
