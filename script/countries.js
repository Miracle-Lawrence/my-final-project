const countryBaseURL = "https://restcountries.com/v3.1/name/";

async function fetchCountry(countryName) {
  try {
    const response = await fetch(`${countryBaseURL}${countryName}`);

    if (!response.ok) {
      throw new Error("Country not found");
    }

    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching country:", error);
  }
}

function countryTemplate(country) {
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "N/A";

  return `
    <div class="country-card">
      <h3>${country.name.common}</h3>
      <img src="${country.flags.png}" alt="Flag of ${country.name.common}" />
      <p><strong>Capital:</strong> ${country.capital?.[0] || "N/A"}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> ${languages}</p>
      <p><strong>Currency:</strong> ${currencies}</p>
    </div>
  `;
}

function renderCountry(country, container) {
  container.innerHTML = countryTemplate(country);
}

export function initCountrySearch() {
  const button = document.getElementById("searchCountryBtn");
  const input = document.getElementById("countryInput");
  const container = document.getElementById("countryContainer");

  if (!button) return;

  button.addEventListener("click", async () => {
    const countryName = input.value.trim();
    if (!countryName) return;

    const country = await fetchCountry(countryName);
    if (country) {
      renderCountry(country, container);
    } else {
      container.innerHTML = "<p>Country not found.</p>";
    }
  });
}
