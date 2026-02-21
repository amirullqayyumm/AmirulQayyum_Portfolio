// script.js
const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

function updateThemeIcon() {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    themeBtn.textContent = isLight ? "☀" : "☾";
}
updateThemeIcon();

themeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "" : "light";
    if (next) document.documentElement.setAttribute("data-theme", next);
    else document.documentElement.removeAttribute("data-theme");

    localStorage.setItem("theme", next || "");
    updateThemeIcon();
});

// Mobile menu
const burgerBtn = document.getElementById("burgerBtn");
const navlinks = document.getElementById("navlinks");

burgerBtn.addEventListener("click", () => {
    navlinks.classList.toggle("open");
});

navlinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navlinks.classList.remove("open"));
});
