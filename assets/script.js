function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	allForm.forEach(item=> {
		item.classList.remove('active');
	})
	form.classList.add('active');
}


const registerPassword = document.querySelector('form.register #password');
const registerConfirmPassword = document.querySelector('form.register #confirm-pass');

registerPassword.addEventListener('input', function () {
	registerConfirmPassword.pattern = `${this.value}`;
})


//sistem login
// script.js
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Simulasi autentikasi sederhana (ganti dengan logika autentikasi Anda)
  if (username === "AN2024063564" && password === "simulasian") {
    // Jika login berhasil, buka jendela baru
    window.open("https://quilgo.com/t/vWqSPEYMTLBKsW8f", "_blank");
    message.textContent = "Login berhasil!";
  } else {
    message.textContent = "Username atau password salah!";
  }
}
