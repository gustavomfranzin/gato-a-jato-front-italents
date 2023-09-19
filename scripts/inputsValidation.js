function formatPhoneNumber(input) {
  let phoneNumber = input.value.replace(/\D/g, "");

  if (phoneNumber.length >= 11) {
    phoneNumber = phoneNumber.slice(0, 11);
  }

  if (phoneNumber.length >= 7) {
    input.value = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
      2,
      7
    )}-${phoneNumber.slice(7)}`;
  } else if (phoneNumber.length >= 2) {
    input.value = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  } else {
    input.value = phoneNumber;
  }
}

function validatePhoneNumber(input) {
  const phoneNumber = input.value.replace(/\D/g, "");

  if (/^\d{10,11}$/.test(phoneNumber)) {
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
}

function validatePassword() {
  const passwordInput = document.getElementById("password-register");
  const passwordStrength = document.getElementById("password-strength");
  const passwordStrengthMeter = document.getElementById(
    "password-strength-meter"
  );

  const password = passwordInput.value;

  let score = 0;

  if (password.length >= 8) {
    score++;
  }

  if (/[A-Z]/.test(password)) {
    score++;
  }

  if (/[a-z]/.test(password)) {
    score++;
  }

  if (/\d/.test(password)) {
    score++;
  }

  if (/[@#$%^&+=]/.test(password)) {
    score++;
  }

  if (score === 0) {
    passwordStrength.textContent = "Muito Fraca";
    passwordStrengthMeter.style.backgroundColor = "#be1704";
  } else if (score === 1) {
    passwordStrength.textContent = "Fraca";
    passwordStrengthMeter.style.backgroundColor = "#db3434";
  } else if (score === 2) {
    passwordStrength.textContent = "Média";
    passwordStrengthMeter.style.backgroundColor = "#eb7575";
  } else if (score === 3) {
    passwordStrength.textContent = "Forte";
    passwordStrengthMeter.style.backgroundColor = "#ff9800";
  } else {
    passwordStrength.textContent = "Muito Forte";
    passwordStrengthMeter.style.backgroundColor = "#31b800";
  }
}
