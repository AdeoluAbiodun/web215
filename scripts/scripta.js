function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Simple validation
  if (name && email && message) {
    console.log("Name:", name, "Email:", email, "Message:", message);
    alert("Thank you for contacting us!");
  } else {
    alert("Please fill out all fields.");
  }
}
