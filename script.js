// 🌙 DARK / LIGHT MODE TOGGLE
const toggleBtn = document.getElementById("toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    // Change button icon
    if (body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});


const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
    let value = searchInput.value.toLowerCase();

    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        let text = section.innerText.toLowerCase();

        if (text.includes(value)) {
            section.style.display = "block";   // ✅ changed
        } else {
            section.style.display = "none";
        }
    });
});

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("fullImg");
const closeBtn = document.querySelector(".close");

// Select all images
const images = document.querySelectorAll("img");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// Close button
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Click outside to close
modal.onclick = () => {
    modal.style.display = "none";
};