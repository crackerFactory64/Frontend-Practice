const menuButton = document.getElementById("menu-button");
const headerNav = document.getElementById("header-nav");
const searchButton = document.getElementById("search-button");
const headerSearch = document.getElementById("header-search");
const closeSearchButton = document.getElementById("close-header-search");

function toggleElement(target) {
  target.classList.toggle("open");
}

menuButton.addEventListener("click", () => toggleElement(headerNav));

[searchButton, closeSearchButton].forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    toggleElement(headerSearch);
  });
});
