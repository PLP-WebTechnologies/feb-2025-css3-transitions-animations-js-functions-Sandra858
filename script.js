// Load saved theme
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

// Toggle theme and save preference
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// Animate section title
document.getElementById("animateBtn").addEventListener("click", () => {
  const title = document.getElementById("sectionTitle");
  title.classList.remove("bounce");
  void title.offsetWidth; // reflow
  title.classList.add("bounce");
});
