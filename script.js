document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       1. ANIMAÇÃO DE SCROLL (FADE-IN)
    ===================================== */

    const elements = document.querySelectorAll(
        "section, article, figure, #app ul li, details"
    );

    elements.forEach(el => {
        el.classList.add("fade-in");
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));


    /* =====================================
       2. MENU MOBILE (CRIADO DO ZERO)
    ===================================== */

    const header = document.querySelector("header");
    const nav = document.querySelector("header nav");

    const menuButton = document.createElement("button");
    menuButton.innerHTML = "☰";
    menuButton.classList.add("menu-toggle");

    header.appendChild(menuButton);

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            menuButton.innerHTML = "✖";
        } else {
            menuButton.innerHTML = "☰";
        }
    });

});
