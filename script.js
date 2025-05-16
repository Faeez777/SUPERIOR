function togglePassword() {
  const passwordField = document.getElementById("password");
  const toggleBtn = document.getElementById("toggleBtn");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleBtn.textContent = "👀";
  } else {
    passwordField.type = "password";
    toggleBtn.textContent = "🙈";
  }
}
