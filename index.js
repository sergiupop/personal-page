const activeTheme = "light";
const inactiveTheme = activeTheme === "light" ? "dark" : "light";
const activeThemeIcon = document.getElementById(`${activeTheme}-theme-icon`);
activeThemeIcon.classList.add("hide-element");

function switchTheme() {
  const themeIcons = document.getElementsByClassName("theme-icon");
  for (const themeIcon of themeIcons) {
    themeIcon.classList.toggle("hide-element");
  }
}