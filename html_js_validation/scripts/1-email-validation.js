function validateEmail(e) {
  e.preventDefault(); // prevent the default form submission

  const email = document.getElementById("email").value;
  const errorMsg = document.getElementById("error");
  const emailPatternRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPatternRegex.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return false;
  }

  errorMsg.textContent = "";
  return true;
}