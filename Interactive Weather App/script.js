const API_KEY = "9abec925694b4b2b845132510252005";
const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city");
const result = document.getElementById("weather-result");
const toggleBtn = document.getElementById("toggle-theme");

// Init theme & last city
const theme = localStorage.getItem("theme") || "light";
document.body.classList.add(theme);
toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
window.addEventListener("DOMContentLoaded", () => {
  const last = localStorage.getItem("lastCity");
  if (last) {
    cityInput.value = last;
    fetchWeather(last);
  }
});

toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
  const t = document.body.classList.contains("dark") ? "dark" : "light";
  toggleBtn.textContent = t === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", t);
};

form.onsubmit = (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;
  localStorage.setItem("lastCity", city);
  fetchWeather(city);
};

async function fetchWeather(city) {
  result.innerHTML = "Loading…";
  result.style.opacity = 1;
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(
        city
      )}&aqi=no`
    );
    if (!res.ok) throw new Error("City not found");
    const d = await res.json();
    render(d);
  } catch (err) {
    result.innerHTML = `<p class="error">${err.message}</p>`;
  }
}

function render({ location, current }) {
  const icon = "https:" + current.condition.icon;
  result.innerHTML = `
        <h2>${location.name}, ${location.country}</h2>
        <p><img src="${icon}" alt=""><strong> ${current.condition.text}</strong></p>
        <p style="font-size:16px; color:var(--primary);">
          ${current.temp_c}°C
        </p>
        <div class="detail-grid">
          <div><i class="fas fa-thermometer-half"></i>Feels like<br>${current.feelslike_c}°C</div>
          <div><i class="fas fa-tint"></i>Humidity<br>${current.humidity}%</div>
          <div><i class="fas fa-wind"></i>Wind<br>${current.wind_kph} kph</div>
          <div><i class="fas fa-sun"></i>UV Index<br>${current.uv}</div>
          <div><i class="fas fa-cloud"></i>Cloud<br>${current.cloud}%</div>
          <div><i class="fas fa-clock"></i>Updated<br>${current.last_updated}</div>
        </div>
      `;
  gsap.fromTo(
    ".weather-info",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6 }
  );
}
