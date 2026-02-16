// Function to initialize Google Map
export function initMap(containerId) {
  const mapContainer = document.getElementById(containerId);
  if (!mapContainer) return;

  // Abuja coordinates (example location)
  const abujaCenter = { lat: 9.05785, lng: 7.49508 };

  // Create map
  const map = new google.maps.Map(mapContainer, {
    center: abujaCenter,
    zoom: 12,
    mapTypeControl: false,
  });

  // Add marker for tutoring location
  const marker = new google.maps.Marker({
    position: abujaCenter,
    map: map,
    title: "Fanfave Tutoring Location",
  });

  // Optional: show coverage area as a circle (radius in meters)
  const coverageCircle = new google.maps.Circle({
    strokeColor: "#1E88E5",
    strokeOpacity: 0.6,
    strokeWeight: 2,
    fillColor: "#43A047",
    fillOpacity: 0.2,
    map: map,
    center: abujaCenter,
    radius: 5000, // 5km coverage radius
  });
}
