document.getElementById("passwordForm").onsubmit = function () {
  return validatePassword;
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error");
  const uppercaseRegex = /[A - Z]/;
  const lowercaseRegex = /[a - z]/;
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*]/;

  if (password.length < 8) {
    errorMsg.textContent = "Password must contain at least 8 characters long.";
    return false;
  }

  if (!uppercaseRegex.test(password)) {
    errorMsg.textContent = "Password must contain at least one uppercase.";
    return false;
  }

  if (!lowercaseRegex.test(password)) {
    errorMsg.textContent = "Password must contain at least one lowercase.";
    return false;
  }

  if (!digitRegex.test(password)) {
    errorMsg.textContent = "Password must contain at least on numeric digit.";
    return false;
  }

  if (!specialCharRegex.test(password)) {
    errorMsg.textContent = "Password must contain at least one special character.";
    return false
  }

  // If all the criteria are met, clear the error message
  errorMsg.textContent = "";
  return true;
}