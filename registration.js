// --- REGISTRATION SCRIPT ---
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const username = document.querySelector('input[placeholder="Username"]').value.trim();
  const email = document.querySelector('input[placeholder="Email Address"]').value.trim();
  const pass = document.querySelectorAll('input[placeholder="Password"]')[0].value.trim();
  const confirm = document.querySelectorAll('input[placeholder="Confirm Password"]')[0].value.trim();

  if (!username || !email || !pass || !confirm) {
    alert("Заполни все поля, путешественник будущего.");
    return;
  }

  if (pass !== confirm) {
    alert("Пароли не совпадают — исправь, чтобы мир не рухнул.");
    return;
  }

  // сохранение
  localStorage.setItem("user_username", username);
  localStorage.setItem("user_email", email);
  localStorage.setItem("user_password", pass);

  // смена текста
  btn.textContent = "The_end";

  // переход
  setTimeout(() => {
    window.location.href = "index.html";
  }, 800);
});
