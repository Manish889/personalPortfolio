"use strict";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date = new Date();
document.getElementById("month").innerHTML = monthNames[date.getMonth()];
document.getElementById("date").innerHTML = date.getFullYear();

// Dark mode

document.addEventListener("DOMContentLoaded", () => {
  const themeStylesheet = document.getElementById("theme");
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    themeStylesheet.href = storedTheme;
  }
  const themeToggle = document.getElementById("theme-toggle");
  const navbarText = document.getElementById("navbar");
  themeToggle.addEventListener("click", () => {
    // if it's light -> go dark
    if (themeStylesheet.href.includes("Day")) {
      themeStylesheet.href = "css/night-theme.css";
      themeToggle.innerText = "Light mode";
      navbarText.classList.toggle("navbar-dark");
    } else {
      // if it's dark -> go light
      themeStylesheet.href = "css/Day-theme.css";
      themeToggle.innerText = "Dark mode";
      navbarText.classList.remove("navbar-dark");
    }

    localStorage.setItem("theme", themeStylesheet.href);
  });
});
