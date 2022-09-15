const activeTheme = "dark";
const inactiveTheme = activeTheme === "light" ? "dark" : "light";
const activeThemeIcon = document.getElementById(`${activeTheme}-theme-icon`);
activeThemeIcon.classList.add("hide-element");

function switchTheme() {
  document.body.classList.toggle('dark-mode');
  const themeIcons = document.getElementsByClassName("theme-icon");
  for (const themeIcon of themeIcons) {
    themeIcon.classList.toggle("hide-element");
  }
}

const scrollToTopLinkContainer = document.getElementById("scroll-to-top");
const homeSection = document.getElementById("home-section");

window.onscroll = function() {
  if (document.body.scrollTop >= homeSection.clientHeight || 
    document.documentElement.scrollTop >= homeSection.clientHeight) {
    scrollToTopLinkContainer.style.display = "flex";
  } else {
    scrollToTopLinkContainer.style.display = "none";
  }
}