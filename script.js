// Scroll animation
const animatedElements = document.querySelectorAll('.scroll-animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));

// FORM VALIDATION
const form = document.querySelector('.contact__form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

function showError(input, message) {
  const error = input.nextElementSibling;
  input.classList.add('error');
  error.textContent = message;
}

function clearError(input) {
  const error = input.nextElementSibling;
  input.classList.remove('error');
  error.textContent = '';
}

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  // Name
  if (nameInput.value.trim().length < 2) {
    showError(nameInput, 'Введите ваше имя');
    isValid = false;
  } else {
    clearError(nameInput);
  }

  // Email
  if (!validateEmail(emailInput.value.trim())) {
    showError(emailInput, 'Введите корректный email');
    isValid = false;
  } else {
    clearError(emailInput);
  }

  // Message
  if (messageInput.value.trim().length < 10) {
    showError(messageInput, 'Сообщение должно быть не короче 10 символов');
    isValid = false;
  } else {
    clearError(messageInput);
  }

  if (isValid) {
    alert('Форма успешно отправлена!');
    form.reset();
  }
});
