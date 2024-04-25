const form = document.querySelector('.formLogin');
const emailInput = document.querySelector('.formLogin input[type="email"]');
const passwordInput = document.querySelector('.formLogin input[type="password"]');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert('Por favor, preencha os campos de e-mail e senha.');
    // Focus on the first empty field (email by default)
    if (!email) {
      emailInput.focus();
    } else {
      passwordInput.focus();
    }
    return; // Prevent form submission if either field is empty
  }

  // If both fields are filled, proceed with form submission or other logic (replace with your actual logic)
  console.log('Formulário enviado com email:', email, 'e senha:', password);
});