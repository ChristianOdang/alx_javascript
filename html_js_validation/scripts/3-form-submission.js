function handleFormSubmit(e) {
  e.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const errorMessage = document.getElementById("error");
  const sucessMessage = document.getElementById("success");

  // Validate the form fields
  if (name === '' || email === '') {
    errorMessage.textContent = "Please fill in all the required fields";
    sucessMessage.textContent = "";
  } else {
    errorMessage.textContent = ""; // Clear previous error message
    sucessMessage = "Form submitted  successfully!"
  }
}

const form = document.getElementById("submitForm");
form.addEventListener("submit", handleFormSubmit);