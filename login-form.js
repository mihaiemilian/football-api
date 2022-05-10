const loginButton = document.querySelector(".login-button");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector(".close-modal");
const overlay = document.querySelector("#overlay");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  overlay.classList.add("active");
});

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  overlay.classList.remove("active");
});

const userName = document.getElementById("name");
const userPassword = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  if (userName.value === "" || userName.value === null) {
    e.preventDefault();
    alert("Username is required");
  } else if (userPassword.value === "" || userPassword.value === null) {
    e.preventDefault();
    alert("Password is required");
  } else if (userPassword.value.length <= 6) {
    e.preventDefault();
    alert("Password must be longer than 6 characters");
  } else {
    alert("User registered successfully");
  }
});
