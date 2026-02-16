export async function loadTestimonials(containerId) {
  try {
    const response = await fetch("./json/testimonials.json");
    const testimonials = await response.json();

    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    testimonials.forEach((testimonial, index) => {
      const card = document.createElement("div");
      card.classList.add("testimonial-card");

      if (index !== 0) {
        card.style.display = "none";
      }

      card.innerHTML = `
        <p>"${testimonial.message}"</p>
        <h4>- ${testimonial.author}</h4>
      `;

      container.appendChild(card);
    });

    startSlider(container);
  } catch (error) {
    console.error("Error loading testimonials:", error);
  }
}


function startSlider(container) {
  const cards = container.querySelectorAll(".testimonial-card");
  let currentIndex = 0;

  setInterval(() => {
    cards[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].style.display = "block";
  }, 4000); // changes every 4 seconds
}
