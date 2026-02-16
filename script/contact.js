// Function to validate contact form
function validateContactForm(form) {
  const name = form.contactName.value.trim();
  const email = form.contactEmail.value.trim();
  const project = form.projectTopic.value.trim();
  const deadline = form.projectDeadline.value.trim();
  const message = form.projectMessage.value.trim();

  if (!name || !email || !project || !deadline || !message) {
    alert("Please fill in all required fields.");
    return false;
  }

  // Simple email regex check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

// Function to handle contact form submission using EmailJS
export function initContactForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateContactForm(form)) return;

    // Collect form data
    const contactData = {
      name: form.contactName.value.trim(),
      email: form.contactEmail.value.trim(),
      project: form.projectTopic.value.trim(),
      deadline: form.projectDeadline.value.trim(),
      message: form.projectMessage.value.trim(),
    };

    try {
      // Send form via EmailJS
      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' with your EmailJS info
      emailjs
        .send(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          contactData,
          "YOUR_PUBLIC_KEY",
        )
        .then(
          () => {
            alert("Your request has been sent successfully!");
            form.reset();
          },
          (error) => {
            console.error("EmailJS error:", error);
            alert("Failed to send request. Please try again later.");
          },
        );
    } catch (error) {
      console.error("Error sending contact form:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  });
}
