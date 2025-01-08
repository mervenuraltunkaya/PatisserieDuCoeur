export function initTheme(themeSwitchSelector) {
  const themeSwitch = document.getElementById(themeSwitchSelector);

  if (!themeSwitch) return;

  const applyTheme = (theme) => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("theme", theme);
  };

  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
  themeSwitch.checked = savedTheme === "dark";

  themeSwitch.addEventListener("change", () => {
    applyTheme(themeSwitch.checked ? "dark" : "light");
  });
}
