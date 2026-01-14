// TOGGLE MENU BARS ICON
const barsIcon = document.getElementById('bars');
const dropdown = document.getElementById('dropdown-menu');

if (barsIcon && dropdown) {
  barsIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
    barsIcon.classList.toggle('fa-bars');
    barsIcon.classList.toggle('fa-times');
  });

  document.addEventListener('click', (e) => {
    const isClickInside = dropdown.contains(e.target) || barsIcon.contains(e.target);
    if (!isClickInside && dropdown.classList.contains('open')) {
      dropdown.classList.remove('open');
      barsIcon.classList.remove('fa-times');
      barsIcon.classList.add('fa-bars');
    }
  });
}

// ===================================================
// PRAYER SECTION
// ===================================================

// 1️⃣ Ottieni posizione tramite IP (fallback)
async function getLocationByIP() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    if (!data.latitude || !data.longitude) throw new Error("Posizione non trovata via IP");
    return { latitude: data.latitude, longitude: data.longitude };
  } catch (err) {
    throw new Error("Impossibile determinare la posizione tramite IP");
  }
}

// 2️⃣ Ottieni posizione reale se possibile, altrimenti via IP
async function getCurrentLocationSmart() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        pos => resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
        async () => {
          console.warn("Geolocalizzazione bloccata, uso IP fallback...");
          try {
            const location = await getLocationByIP();
            resolve(location);
          } catch (err) {
            reject(err);
          }
        }
      );
    } else {
      getLocationByIP().then(resolve).catch(reject);
    }
  });
}

async function getPrayerTimesByCurrentLocation() {
const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Rome";

const ALADHAN_PARAMS = new URLSearchParams({
  method: "3",                 
  school: "2",                
  latitudeAdjustmentMethod: "3",
  timezonestring: tz
});

const { latitude, longitude } = await getCurrentLocationSmart();
const date = new Date().toISOString().split("T")[0];

const url = `https://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}&${ALADHAN_PARAMS.toString()}`;
const res = await fetch(url);
if (!res.ok) throw new Error("Errore nel caricamento degli orari di preghiera");

const data = await res.json();
const t = data.data.timings;

return [
  { name: "Fajr",    time: t.Fajr },
  { name: "Dhuhr",   time: t.Dhuhr },
  { name: "Asr",     time: t.Asr },
  { name: "Maghrib", time: t.Maghrib },
  { name: "Isha",    time: t.Isha },
];

}

// Genera i div per visualizzare gli orari
async function generatePrayerDivs() {
  const container = document.getElementById("prayers");
  if (!container) return;

  container.innerHTML = `
    <div class="loader-wrapper">
      <div class="spinner"></div>
    </div>
  `;

  try {
    const prayers = await getPrayerTimesByCurrentLocation();

    container.innerHTML = ""; 

    prayers.forEach(prayer => {
      const ptDiv = document.createElement("div");
      ptDiv.classList.add("pt", "flx-c");

      const prayerDiv = document.createElement("div");
      prayerDiv.classList.add("prayer");

      const img = document.createElement("img");
      img.src = `../assets/prayers/${prayer.name.toLowerCase()}.webp`;
      img.alt = `${prayer.name} icon`;

      const spanName = document.createElement("span");
      spanName.textContent = prayer.name;

      prayerDiv.appendChild(img);
      prayerDiv.appendChild(spanName);

      const hourDiv = document.createElement("div");
      hourDiv.classList.add("hour");

      const spanTime = document.createElement("span");
      spanTime.textContent = prayer.time;

      hourDiv.appendChild(spanTime);

      ptDiv.appendChild(prayerDiv);
      ptDiv.appendChild(hourDiv);

      container.appendChild(ptDiv);
    });
  } catch (error) {
    container.innerHTML = `
      <p class="error">⚠️ Errore nel recuperare la posizione o gli orari.<br>
      Ricarica la pagina o controlla la connessione.</p>
    `;
    console.error(error.message);
  }
}

// Avvia al caricamento
generatePrayerDivs();

// ===================================================
// 🌙 NAVBAR SCROLL EFFECT
// ===================================================
window.addEventListener("scroll", function () {
  const navContainer = document.querySelector("nav .container");
  const hero = document.querySelector(".hero");
  const heroHeight = hero.offsetHeight;

  if (window.scrollY > heroHeight) {
    navContainer.classList.add("scrolled");
  } else {
    navContainer.classList.remove("scrolled");
  }
});

// ===================================================
// 🕋 PILLARS SECTION
// ===================================================
const pillars = [
  { imgSrc: "../assets/pillars/bismillah.webp", altText: "shahada image", title: "testimonianza di fede (shahada)" },
  { imgSrc: "../assets/pillars/islamic.webp", altText: "prayer image", title: "preghiera (salat)" },
  { imgSrc: "../assets/pillars/bank.webp", altText: "bank image", title: "elemosina (zakat)" },
  { imgSrc: "../assets/pillars/iftar.webp", altText: "iftar image", title: "digiuno (sawm)" },
  { imgSrc: "../assets/pillars/kaaba.webp", altText: "pilgrimage image", title: "pellegrinaggio (hajj)" }
];

function generatePillars() {
  const container = document.getElementById("pillars-container");
  if (!container) return;

  pillars.forEach(pillar => {
    const pillarDiv = document.createElement("div");
    pillarDiv.classList.add("pillar");

    const img = document.createElement("img");
    img.src = pillar.imgSrc;
    img.alt = pillar.altText;

    const h4 = document.createElement("h4");
    h4.textContent = pillar.title;

    pillarDiv.appendChild(img);
    pillarDiv.appendChild(h4);
    container.appendChild(pillarDiv);
  });
}

generatePillars();
