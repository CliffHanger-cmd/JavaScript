const form = document.getElementById('reg-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm');
document.getElementById('success-msg').style.display = 'none';



// Checklist items
 const requirements = {
    length: pwd => pwd.length >= 8,
    uppercase: pwd => /[A-Z]/.test(pwd),
    lowercase: pwd => /[a-z]/.test(pwd),
    number: pwd => /[0-9]/.test(pwd),
    special: pwd => /[!@#$%^&*]/.test(pwd)
  };

  function setStatus(groupId, status) {
    const group = document.getElementById(groupId);
    group.classList.remove('error', 'success');
    group.classList.add(status);
  }

  function validateName() {
    const value = nameInput.value.trim();
    if (value === '') setStatus('group-name', 'error');
    else setStatus('group-name', 'success');
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(value)) setStatus('group-email', 'error');
    else setStatus('group-email', 'success');
  }

  function validatePassword() {
    const pwd = passwordInput.value;
    let allValid = true;
    Object.keys(requirements).forEach(key => {
      const valid = requirements[key](pwd);
      document.getElementById(key).classList.toggle('valid', valid);
      document.getElementById(key).classList.toggle('invalid', !valid);
      if (!valid) allValid = false;
    });
    setStatus('group-password', allValid ? 'success' : 'error');
    validateConfirm();
  }

  function validateConfirm() {
    const match = passwordInput.value === confirmInput.value && confirmInput.value !== '';
    setStatus('group-confirm', match ? 'success' : 'error');
  }

  // Live validation
  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);
  confirmInput.addEventListener('input', validateConfirm);

  form.addEventListener('submit', e => {
    e.preventDefault();
    validateName(); validateEmail(); validatePassword(); validateConfirm();
    const errors = document.querySelectorAll('.form-group.error');
    if (errors.length === 0) {
    //   alert('Form submitted successfully!');
      document.getElementById('success-msg').style.display = 'block';

      form.reset();
      // reset styling
      document.querySelectorAll('.form-group').forEach(g => g.classList.remove('success'));
      document.querySelectorAll('.checklist li').forEach(li => li.classList.replace('valid', 'invalid'));
    }
  });