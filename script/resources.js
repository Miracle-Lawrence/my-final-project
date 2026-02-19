const baseURL = "https://openlibrary.org/subjects/";

async function fetchBooks(subject) {
  try {
    const response = await fetch(`${baseURL}${subject}.json?limit=6`);

    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    const data = await response.json();
    return data.works;
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

function bookTemplate(book) {
  return `
    <div class="book-card">
      <h3>${book.title}</h3>
      <p>Author: ${book.authors?.[0]?.name || "Unknown"}</p>
      <p>First Published: ${book.first_publish_year || "N/A"}</p>
      ${
        book.cover_id
          ? `<img src="https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg" alt="${book.title}" />`
          : ""
      }
    </div>
  `;
}

function renderBooks(books, container) {
  container.innerHTML = "";
  books.forEach((book) => {
    container.innerHTML += bookTemplate(book);
  });
}

export function initBookSearch() {
  const button = document.getElementById("searchBooksBtn");
  const select = document.getElementById("subjectSelect");
  const container = document.getElementById("booksContainer");

  if (!button) return;

  // Check if a subject was saved previously
  const savedSubject = localStorage.getItem("lastSubject");

  if (savedSubject) {
    select.value = savedSubject;

    // Automatically load saved subject books
    fetchBooks(savedSubject).then((books) => {
      if (books) renderBooks(books, container);
    });
  }

  // Save subject when button is clicked
  button.addEventListener("click", async () => {
    const subject = select.value;

    // Save to localStorage
    localStorage.setItem("lastSubject", subject);

    const books = await fetchBooks(subject);
    if (books) renderBooks(books, container);
  });
}
