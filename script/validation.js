// script/validation.js

// Check if a value is empty
export function isEmpty(value) {
  return !value || value.trim() === "";
}

// Validate email format
export function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email.trim());
}

// Validate phone number format (optional)
export function isValidPhone(phone) {
  const pattern = /^\d{7,15}$/; // Only digits, 7 to 15 characters
  return pattern.test(phone.trim());
}

// Validate a form with required fields
export function validateForm(form, requiredFields) {
  let valid = true;

  requiredFields.forEach((fieldName) => {
    const input = form[fieldName];
    if (!input) return;

    if (isEmpty(input.value)) {
      alert(`Please fill in ${fieldName}`);
      valid = false;
    } else if (
      fieldName.toLowerCase().includes("email") &&
      !isValidEmail(input.value)
    ) {
      alert(`Please enter a valid email for ${fieldName}`);
      valid = false;
    }
  });

  return valid;
}
