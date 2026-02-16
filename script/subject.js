// script/subject.js

// Function to load subjects and render them into a container
export async function loadSubjects(containerId) {
  try {
    // Fetch subjects JSON
    const response = await fetch("./json/subjects.json");
    if (!response.ok) {
      throw new Error("Failed to load subjects");
    }
    const categories = await response.json();

    // Select container element
    const container = document.getElementById(containerId);
    if (!container) return;

    // Clear existing content
    container.innerHTML = "";

    // Loop through each category and create HTML
    categories.forEach((category) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("subject-category");

      categoryDiv.innerHTML = `
                <h3>${category.category}</h3>
                <ul>
                    ${category.subjects.map((subject) => `<li>${subject}</li>`).join("")}
                </ul>
            `;

      container.appendChild(categoryDiv);
    });
  } catch (error) {
    console.error("Error loading subjects:", error);
  }
}
