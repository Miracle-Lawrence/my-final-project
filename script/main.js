import { loadServices } from "./services.js";
import { loadSubjects } from "./subject.js";
import { loadTestimonials } from "./testimonial.js";
import { initBookingForm } from "./booking.js";
import { initContactForm } from "./contact.js";
import { initBookSearch } from "./resources.js";
import { initCountrySearch } from "./countries.js";

// ==== Set footer year and last modified ====
const currentYear = new Date().getFullYear();
const footer = document.querySelector("footer");

if (footer) {
  const paras = footer.querySelectorAll("p");
  if (paras.length >= 2) {
    paras[0].textContent = `© ${currentYear} | Fanfave Tutoring Services, Nigeria`;
    paras[1].textContent = `Last Modified: ${document.lastModified}`;
  }
}

// ==== Navigation hamburger toggle ====
const navButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

if (navButton && navBar) {
  navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navBar.classList.toggle("show");
  });
}

// ==== Load Services ====
loadServices("services-container");

// ==== Load Subjects ====
loadSubjects("subjects-container");

// ==== Load Testimonials ====
loadTestimonials("testimonials-container");

// ==== Initialize Booking Form ====
initBookingForm("booking-form");

// ==== Initialize Contact Form ====
initContactForm("contact-form");

initBookSearch();

initCountrySearch();





