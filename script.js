document.getElementById("signupForm").addEventListener("submit", function (e) {
  let isValid = true;

  // First Name
  const firstName = document.getElementById("firstName");
  const firstNameError = document.getElementById("firstNameError");
  if (firstName.value.trim() === "") {
    firstName.classList.add("invalid");
    firstNameError.textContent = "First name is required";
    isValid = false;
  } else {
    firstName.classList.remove("invalid");
    firstNameError.textContent = "";
  }

  // Last Name
  const lastName = document.getElementById("lastName");
  const lastNameError = document.getElementById("lastNameError");
  if (lastName.value.trim() === "") {
    lastName.classList.add("invalid");
    lastNameError.textContent = "Last name is required";
    isValid = false;
  } else {
    lastName.classList.remove("invalid");
    lastNameError.textContent = "";
  }

  // Email
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add("invalid");
    emailError.textContent = "Invalid Email Id";
    isValid = false;
  } else {
    email.classList.remove("invalid");
    emailError.textContent = "";
  }

  // Phone Number
  const phone = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone.value.trim())) {
    phone.classList.add("invalid");
    phoneError.textContent = "Enter a valid 10-digit phone number";
    isValid = false;
  } else {
    phone.classList.remove("invalid");
    phoneError.textContent = "";
  }

  // Password
  const password = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  if (password.value.length < 6) {
    password.classList.add("invalid");
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  } else {
    password.classList.remove("invalid");
    passwordError.textContent = "";
  }

  // Confirm Password
  const confirmPassword = document.getElementById("confirmPassword");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    confirmPassword.classList.add("invalid");
    confirmPasswordError.textContent = "Passwords do not match";
    isValid = false;
  } else {
    confirmPassword.classList.remove("invalid");
    confirmPasswordError.textContent = "";
  }

  // Prevent submission if validation fails
  if (!isValid) {
    e.preventDefault();
  }
});
