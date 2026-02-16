const apiKey = "AIzaSyAYgM6Cf-4M8lPX00JBUY0Nfz2zt6nF1BA";

const calendarId =
  "fd536d6c42d64d9821b79e353f77307b7cfcc75c7904c0da5793614fea06342a@group.calendar.google.com";

const calendarContainer = document.querySelector(".calendar-placeholder");

async function loadCalendarEvents() {
  if (!calendarContainer) return;

  const now = new Date().toISOString();

  const url =
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events` +
    `?key=${apiKey}` +
    `&timeMin=${now}` +
    `&maxResults=5` +
    `&singleEvents=true` +
    `&orderBy=startTime`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Calendar failed to load");
    }

    const data = await response.json();

    displayEvents(data.items || []);
  } catch (error) {
    console.error(error);

    calendarContainer.innerHTML = "<p>Unable to load calendar events.</p>";
  }
}

function displayEvents(events) {
  calendarContainer.innerHTML = "<h3>Upcoming Lessons</h3>";

  if (events.length === 0) {
    calendarContainer.innerHTML += "<p>No upcoming lessons scheduled.</p>";

    return;
  }

  events.forEach((event) => {
    const div = document.createElement("div");

    div.className = "calendar-event";

    const date = new Date(event.start.dateTime || event.start.date);

    div.innerHTML = `
      <p><strong>${event.summary || "Lesson"}</strong></p>
      <p>${date.toLocaleString()}</p>
    `;

    calendarContainer.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", loadCalendarEvents);
