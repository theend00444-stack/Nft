// =======================
//  ОТОБРАЖЕНИЕ USERNAME В HEADER
// =======================
const headerSignUp = document.querySelector(".sign-up");
const savedName = localStorage.getItem("user_username");

if (headerSignUp) {
  if (savedName && savedName.trim().length > 0) {
    headerSignUp.innerHTML = `<img src="assets/user.png" alt=""> ${savedName}`;
  } else {
    headerSignUp.innerHTML = `<img src="assets/user.png" alt=""> Sign Up`;
  }
}


// =======================
//  ЖИВОЕ ОБНОВЛЕНИЕ USERNAME НА РЕГИСТРАЦИИ
// =======================
const usernameInput = document.querySelector('input[placeholder="Username"]');

if (usernameInput) {
  usernameInput.addEventListener("input", () => {
    const name = usernameInput.value.trim();

    localStorage.setItem("user_username", name);

    if (name.length > 0) {
      headerSignUp.innerHTML = `<img src="assets/user.png" alt=""> ${name}`;
    } else {
      headerSignUp.innerHTML = `<img src="assets/user.png" alt=""> Sign Up`;
    }
  });
}


// =======================
//  ЛОГИН ДЛЯ <a href> ВМЕСТО BUTTON
// =======================

// вместо кнопки ищем ссылку
const loginBtn = document.querySelector(".login-btn"); // ← измени под свой класс!

if (loginBtn && document.querySelector('input[placeholder="Email"]')) {
  loginBtn.addEventListener("click", (event) => {
    event.preventDefault(); // чтобы <a> не переходил сразу

    const email = document.querySelector('input[placeholder="Email"]').value.trim();
    const pass = document.querySelector('input[placeholder="Password"]').value.trim();

    const savedEmail = localStorage.getItem("user_email");
    const savedPass = localStorage.getItem("user_password");

    if (email === savedEmail && pass === savedPass) {
      window.location.href = "index.html";
    } else {
      alert("Данные не совпадают. Звёзды сегодня не на твоей стороне.");
    }
  });
}
