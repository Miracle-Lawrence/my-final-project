// Function to validate booking form
function validateBookingForm(form) {
  const name = form.studentName.value.trim();
  const email = form.studentEmail.value.trim();
  const subject = form.subject.value.trim();
  const date = form.lessonDate.value.trim();
  const time = form.lessonTime.value.trim();

  if (!name || !email || !subject || !date || !time) {
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

// Function to handle booking form submission
export function initBookingForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateBookingForm(form)) return;

    // Collect form data
    const bookingData = {
      name: form.studentName.value.trim(),
      email: form.studentEmail.value.trim(),
      subject: form.subject.value.trim(),
      date: form.lessonDate.value.trim(),
      time: form.lessonTime.value.trim(),
    };

    // Placeholder for Google Calendar API integration
    // You would call your API function here to create an event
    console.log("Booking data:", bookingData);
    alert(
      `Thank you ${bookingData.name}! Your lesson for ${bookingData.subject} is booked on ${bookingData.date} at ${bookingData.time}.`,
    );

    // Optionally, reset the form
    form.reset();
  });
}
