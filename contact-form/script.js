document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("error-message");
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  
    // Reset error
    errorMessage.textContent = "";
  
    if (!fullName || !email || !subject || !message) {
      errorMessage.textContent = "All fields are required.";
      return;
    }
  
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return;
    }
  
    // If all validations pass
    alert("Form submitted successfully!");
  
    // Clear the form
    this.reset();
  });
  