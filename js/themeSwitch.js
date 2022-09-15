const LIGHT_THEME = "light-theme";
const DARK_THEME = "dark-theme";

const setThemeClassOnBody = (theme) => {
  document.body.classList.remove(LIGHT_THEME, DARK_THEME); 
  document.body.classList.add(theme);
}

const resetAllThemeIconsDisplay = () => {
  const themeIcons = document.getElementsByClassName("theme-icon");
  for (const themeIcon of themeIcons) {
    themeIcon.style.display = "none";
  }
}

const displayActiveThemeIcon = (theme) => {
  resetAllThemeIconsDisplay();
  
  const activeThemeIcon = document.getElementById(`${theme}-icon`);
  activeThemeIcon.style.display = "block";
}

const setNewTheme = (theme) => {
  setThemeClassOnBody(theme);
  displayActiveThemeIcon(theme);
}

const setSavedTheme = () => {
  const savedTheme = localStorage.getItem("page_theme") || LIGHT_THEME;
  setNewTheme(savedTheme);
}

setSavedTheme();

const switchTheme = () => {
  const newTheme = document.body.classList.contains(DARK_THEME) ? LIGHT_THEME : DARK_THEME;
  localStorage.setItem("page_theme" , newTheme);
  setNewTheme(newTheme);
}

window.onstorage = setSavedTheme;