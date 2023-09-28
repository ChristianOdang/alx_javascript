document.getElementById("numFields").addEventListener("change", function () {
  const selectedValue = parseInt(this.value);
  generateInputFields(selectedValue);
});

document.getElementById("dynamicForm").addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault();
    alert("Please fill in all fields.");
  }
});

function generateInputFields(selectedValue) {
  const inputContainer = document.getElementById("inputContainer");
  inputContainer.innerHTML = ""; // Clear existing fields

  for (let i = 1; i <= selectedValue; i++) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = "field" + i;
    inputContainer.appendChild(inputField);
  }
}

function validateForm() {
  const inputFields = document.querySelectorAll("#inputContainer input");
  for (const field of inputFields) {
    if (field.value.trim() === "") {
      return false;
    }
  }
  return true;
}