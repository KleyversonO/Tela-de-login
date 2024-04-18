const form = document.querySelector('.formLogin');
const emailInput = document.querySelector('.formLogin input[type="email"]');
const passwordInput = document.querySelector('.formLogin input[type="password"]');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  let isValid = true;
  let errorMessage = '';

  // Validação de email (exemplo básico)
  if (!email || !email.match(/^[\w-\.]+@[\w-\.]+\.[a-zA-Z]{2,}$/)) {
    isValid = false;
    errorMessage = 'Por favor, insira um e-mail válido.';
  }

  // Validação de senha (exemplo básico)
  if (password.length < 6) {
    isValid = false;
    errorMessage = 'A senha deve ter no mínimo 6 caracteres.';
  }

  if (!isValid) {
    // Exibe mensagem de erro (exemplo usando alert)
    alert(errorMessage);
    return; // Impede o processamento do formulário se inválido
  }

  // Se a validação for bem-sucedida (substitua pela lógica de envio real do formulário)
  console.log('Formulário enviado com email:', email, 'e senha:', password);
});