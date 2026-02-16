// script/router.js

// Simple client-side router
// Loads page content dynamically based on hash or page ID

/**
 * Load a page into the main content container
 * @param {string} pageId - The ID or name of the page to load
 */
export function loadPage(pageId) {
  const content = document.getElementById("main-content");
  if (!content) return;

  // Clear existing content
  content.innerHTML = "";

  // Load content based on pageId
  switch (pageId) {
    case "home":
      import("./home.js").then((module) => module.initHome());
      break;
    case "services":
      import("./services.js").then((module) => module.initServices());
      break;
    case "booking":
      import("./booking.js").then((module) => module.initBooking());
      break;
    case "contact":
      import("./contact.js").then((module) =>
        module.initContactForm("contact-form"),
      );
      break;
    default:
      content.innerHTML = "<h2>Page not found</h2>";
      break;
  }
}

/**
 * Initialize the router
 * Listens to hash changes and loads the corresponding page
 */
export function initRouter() {
  window.addEventListener("hashchange", () => {
    const page = window.location.hash.replace("#", "") || "home";
    loadPage(page);
  });

  // Load default page
  const initialPage = window.location.hash.replace("#", "") || "home";
  loadPage(initialPage);
}
