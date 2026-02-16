// Function to load services and render them into a container
export async function loadServices(containerId) {
  try {
    // Fetch services JSON
    const response = await fetch("./json/services.json");
    if (!response.ok) {
      throw new Error("Failed to load services");
    }
    const services = await response.json();

    // Select container element
    const container = document.getElementById(containerId);
    if (!container) return;

    // Clear any existing content
    container.innerHTML = "";

    // Loop through services and create HTML
    services.forEach((service) => {
      const card = document.createElement("div");
      card.classList.add("service-card");

      card.innerHTML = `
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a href="${service.link}" class="btn">Learn More</a>
            `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading services:", error);
  }
}
