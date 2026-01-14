const SURAH_NAMES_IT = {
  1: "Surat Al-Fâtiha (L'Aprente)",
  2: "Surat Al-Baqara (La Giovenca)",
  3: "Surat 'Âl 'Imrân (La Famiglia di Imran)",
  4: "Surat An-Nisâ' (Le Donne)",
  5: "Surat Al-Mâ'ida (La Tavola Imbandita)",
  6: "Surat Al-An'âm (Il Bestiame)",
  7: "Surat Al-A'râf",
  8: "Surat Al-'Anfâl (Il Bottino)",
  9: "Surat At-Tawba (Il Pentimento o la Disapprovazione)",
  10: "Surat Yûnus (Giona)",
  11: "Surat Hûd",
  12: "Sura Yûsuf (Giuseppe)",
  13: "Sura Ar-Ra'd (Il Tuono)",
  14: "Sura Ibrâhîm (Abramo)",
  15: "Sura Al-Hijr",
  16: "Sura An-Nahl (Le Api)",
  17: "Sura Al-Isrâ' (Il Viaggio Notturno)",
  18: "Sura Al-Kahf (La Caverna)",
  19: "Sura Maryam (Maria)",
  20: "Surat Tâ-Hâ",
  21: "Surat Al-Anbiyâ' (I Profeti)",
  22: "Surat Al-Hajj (Il Pellegrinaggio)",
  23: "Surat Al-Mu'minûn (I Credenti)",
  24: "Surat An-Nûr (La Luce)",
  25: "Sura Al-Furqân (Il Discrimine)",
  26: "Surat Ash-Shu'arâ' (I Poeti)",
  27: "Surat An-Naml (Le Formiche)",
  28: "Surat Al-Qasas (Il Racconto)",
  29: "Al-'Ankabût (Il Ragno)",
  30: "Sura Ar-Rûm (I Romani)",
  31: "Sura Luqmân",
  32: "Sura As-Sajda (La Prosternazione)",
  33: "Sura Al-Ahzâb (I Coalizzati)",
  34: "Sura Sabâ'",
  35: "Sura Fâtir (Colui Che dà origine)",
  36: "Sura Yâ Sîn",
  37: "Sura As-Sâffât (I Ranghi)",
  38: "Sura Sâd",
  39: "Sura Az-Zumar (I Gruppi)",
  40: "Sura Ghâfir (Il Perdonatore)",
  41: "Sura Fussilat (Esposti chiaramente)",
  42: "Sura Ash-Shûrâ (La Consultazione)",
  43: "Sura Az-Zukhruf (Gli Ornamenti d'Oro)",
  44: "Sura Ad-Dukhân (Il Fumo)",
  45: "Sura Al-Jâthiya (La Genuflessa)",
  46: "Sura Al-'Ahqâf",
  47: "Sura Muhammad",
  48: "Sura Al-Fath (La Vittoria)",
  49: "Sura Al-Hujurat (Le Stanze ìntime)",
  50: "Sura Qâf",
  51: "Sura Adh-Dhâriyât (Quelle che spargono)",
  52: "Sura At-Tûr (Il Monte)",
  53: "Sura An-Najm (La Stella)",
  54: "Sura Al-Qamar (La Luna)",
  55: "Sura Ar-Rahmân (Il Compassionevole)",
  56: "Sura Al-Wâqi'a (L'Evento)",
  57: "Sura Al-Hadîd (Il Ferro)",
  58: "Sura Al-Mujâdila (La Disputante)",
  59: "Sura Al-Hashr (L'Esodo)",
  60: "Sura Al-Mumtahana ( L'Esaminata)",
  61: "Sura Aṣ-Ṣaff (I Ranghi Serrati)",
  62: "Sura Al-Jumu'a (Il Venerdì)",
  63: "Sura Al-Munâfiqûn (Gli Ipocriti)",
  64: "Sura At-Taghâbun (Il Reciproco Inganno)",
  65: "Sura At-Talâq (Il Divorzio)",
  66: "Sura At-Tahrîm (L'Interdizione)",
  67: "Sura Al-Mulk (La Sovranità)",
  68: "Sura Al-Qalam (Il Calamo)",
  69: "Sura Al-Hâqqah (L'Inevitabile)",
  70: "Sura Al-Ma'ârij (Le Vie dell'Ascesa)",
  71: "Sura Nûh (Noè)",
  72: "Sura Al-Jinn (I Dèmoni)",
  73: "Sura Al-Muzzammil (L'Avvolto)",
  74: "Sura Al-Muddaththir (L'Avvolto nel Mantello)",
  75: "Sura Al-Qiyâma (La Resurrezione)",
  76: "Sura Al-Insân (L'Uomo)",
  77: "Sura Al-Mursalât (Le Inviate)",
  78: "Sura An-Naba' (L'Annuncio)",
  79: "Sura An-Nâzi'ât (Le Strappanti Violente)",
  80: "Sura 'Abasa (Si Accigliò)",
  81: "Sura At-Takwîr (L'Oscuramento)",
  82: "Sura Al-Infitâr (Lo Squarciarsi)",
  83: "Sura Al-Mutaffifìn (I Frodatori)",
  84: "Sura Al-Inshiqâq (La Fenditura)",
  85: "Sura Al-Burûj (Le Costellazioni)",
  86: "Sura At-Târiq (L'Astro Notturno)",
  87: "Sura Al-A'lâ (L'Altissimo)",
  88: "Sura Al-Ghâshiya (L'Avvolgente)",
  89: "Sura Al-Fajr (L'Alba)",
  90: "Sura Al-Balad (La Contrada)",
  91: "Sura Ash-Shams (Il Sole)",
  92: "Sura Al-Layl (La Notte)",
  93: "Sura Ad-Duhâ (La Luce del Mattino)",
  94: "Sura Ash-Sharh (L'Apertura)",
  95: "Sura At-Tîn (Il Fico)",
  96: "Sura Al-'Alaq (L'Aderenza)",
  97: "Sura Al-Qadr (Il Destino)",
  98: "Sura Al-Bayyina (La prova)",
  99: "Sura Az-Zalzalah (Il Terremoto)",
  100: "Sura Al-'Âdiyât (Le Scalpitanti)",
  101: "Sura Al-Qâri'ah (La Percotente)",
  102: "Sura At-Takâthur (Il Rivaleggiare)",
  103: "Sura Al-'Asr (Il Tempo)",
  104: "Sura Al-Humaza (Il Diffamatore)",
  105: "Sura Al-Fîl (L'Elefante)",
  106: "Sura Quraysh (I Coreisciti)",
  107: "Sura Al-Mâ'un (L'Utensile)",
  108: "Sura Al-Kawthar (L'Abbondanza)",
  109: "Sura Al-Kâfirûn (I Miscredenti)",
  110: "Sura An-Nasr ( L'Ausilio)",
  111: "Sura Al-Masad (Le Fibre di Palma)",
  112: "Sura Al-Ikhlâs (Il Puro Monoteismo)",
  113: "Sura Al-Falaq (L'Alba Nascente)",
  114: "Sura An-Nâs (Gli Uomini)",
};

// =========================
// VARIABILI GLOBALI
// =========================
let allSurahs = [];
let currentSurah = null;
let currentPlayingAudio = null;
let currentPlayingCard = null;
let currentAudio = null;
let currentButton = null;

// =========================
// DOM CONTROL
// =========================
const DOM = {
  tabButtons: document.querySelectorAll(".tab-btn"),
  sections: document.querySelectorAll(".section"),
  app: document.querySelector("#app"),
  audioContainer: document.querySelector("#audioContainer"),
  searchInput: document.getElementById("searchSurah"),
  modal: document.getElementById("surahModal"),
  modalContent: document.getElementById("surahContent"),
  modalTitleAr: document.getElementById("surahTitleAr"),
  modalTitleIt: document.getElementById("surahTitleIt"),
  closeModalBtn: document.querySelector(".close"),
  backButton: document.getElementById("backButton"),
  surahsSection: document.getElementById("surahsSection"),
  audioSection: document.getElementById("audioSection"),
};

// =========================
// TAB NAVIGATION
// =========================
DOM.tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;

    // Stop any playing audio when switching tabs
    if (currentPlayingAudio) {
      currentPlayingAudio.pause();
      currentPlayingAudio = null;
      if (currentPlayingCard) {
        const playBtn = currentPlayingCard.querySelector(".play-btn i");
        playBtn.classList.replace("fa-pause", "fa-play");
        currentPlayingCard
          .querySelector(".play-btn")
          .classList.remove("playing");
      }
    }

    // Update active tab
    DOM.tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Update active section
    DOM.sections.forEach((s) => s.classList.remove("active"));
    if (tab === "surahs") {
      DOM.surahsSection.classList.add("active");
    } else {
      DOM.audioSection.classList.add("active");
    }
  });
});

// =========================
// FETCH QURAN DATA
// =========================
async function fetchQuran(lang = "it") {
  const url = `https://api.alquran.cloud/v1/quran/${
    lang === "it" ? "it.piccardo" : "ar.alafasy"
  }`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data.surahs;
}

async function initQuran() {
  DOM.app.innerHTML = `
    <div style="display: flex; justify-content: center; padding: 2rem;">
      <div class="loader"></div>
    </div>
  `;
  try {
    allSurahs = await fetchQuran("it");
    renderSurahList(allSurahs);
    renderAudioList(allSurahs);
  } catch (err) {
    DOM.app.innerHTML = `<p style="text-align: center; color: red;">Errore nel caricamento: ${err.message}</p>`;
  }
}

// Inizializza l'app
initQuran();

// =========================
// RENDER SURAH LIST (TESTO)
// =========================
function renderSurahList(surahs) {
  DOM.app.innerHTML = "";

  surahs.forEach((surah) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h4 class="card-title">${surah.name}</h4>
      <p class="card-text">${SURAH_NAMES_IT[surah.number]}</p>
      <small>Sura n. ${surah.number}</small>
    `;
    card.onclick = () => showSurah(surah);
    DOM.app.appendChild(card);
  });
}

// =========================
// RENDER AUDIO LIST
// =========================
function renderAudioList(surahs) {
  DOM.audioContainer.innerHTML = "";

  surahs.forEach((surah) => {
    const card = document.createElement("div");
    card.className = "audio-card";
    card.dataset.surahNumber = surah.number;

    card.innerHTML = `
      <div class="audio-card-header">
        <h4 class="audio-card-title">${surah.name}</h4>
        <p class="audio-card-subtitle">${SURAH_NAMES_IT[surah.number]}</p>
        <p class="audio-card-info">Sura n. ${surah.number}</p>
      </div>
      
      <div class="audio-controls">
        <button class="play-btn" aria-label="Play">
          <i class="fa-solid fa-play"></i>
        </button>
        <div class="audio-progress">
          <div class="audio-progress-bar"></div>
        </div>
        <span class="audio-time">0:00</span>
      </div>
    `;

    setupAudioPlayer(card, surah);
    DOM.audioContainer.appendChild(card);
  });
}

// =========================
// SETUP AUDIO PLAYER
// =========================
function setupAudioPlayer(card, surah) {
  const playBtn = card.querySelector(".play-btn");
  const playIcon = playBtn.querySelector("i");
  const progressBar = card.querySelector(".audio-progress-bar");
  const progress = card.querySelector(".audio-progress");
  const timeDisplay = card.querySelector(".audio-time");

  const audioUrl = `https://download.quranicaudio.com/quran/abdulbaset_mujawwad/${String(
    surah.number
  ).padStart(3, "0")}.mp3`;

  playBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    // If clicking the same card
    if (currentPlayingCard === card && currentPlayingAudio) {
      if (currentPlayingAudio.paused) {
        currentPlayingAudio.play();
        playIcon.classList.replace("fa-play", "fa-pause");
        playBtn.classList.add("playing");
      } else {
        currentPlayingAudio.pause();
        playIcon.classList.replace("fa-pause", "fa-play");
        playBtn.classList.remove("playing");
      }
      return;
    }

    // Stop previous audio
    if (currentPlayingAudio) {
      currentPlayingAudio.pause();
      if (currentPlayingCard) {
        const prevIcon = currentPlayingCard.querySelector(".play-btn i");
        prevIcon.classList.replace("fa-pause", "fa-play");
        currentPlayingCard
          .querySelector(".play-btn")
          .classList.remove("playing");
      }
    }

    // Create new audio
    currentPlayingAudio = new Audio(audioUrl);
    currentPlayingCard = card;

    currentPlayingAudio.play();
    playIcon.classList.replace("fa-play", "fa-pause");
    playBtn.classList.add("playing");

    // Update progress
    currentPlayingAudio.addEventListener("timeupdate", () => {
      const percent =
        (currentPlayingAudio.currentTime / currentPlayingAudio.duration) * 100;
      progressBar.style.width = percent + "%";

      const minutes = Math.floor(currentPlayingAudio.currentTime / 60);
      const seconds = Math.floor(currentPlayingAudio.currentTime % 60);
      timeDisplay.textContent = `${minutes}:${seconds
        .toString()
        .padStart(2, "0")}`;
    });

    // Handle end
    currentPlayingAudio.addEventListener("ended", () => {
      playIcon.classList.replace("fa-pause", "fa-play");
      playBtn.classList.remove("playing");
      progressBar.style.width = "0%";
      timeDisplay.textContent = "0:00";
    });
  });

  // Seek functionality
  progress.addEventListener("click", (e) => {
    if (currentPlayingAudio && currentPlayingCard === card) {
      const rect = progress.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      currentPlayingAudio.currentTime = percent * currentPlayingAudio.duration;
    }
  });
}

// =========================
// SEARCH FUNCTIONALITY
// =========================
DOM.searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = allSurahs.filter(
    (s) =>
      s.name.toLowerCase().includes(term) ||
      (SURAH_NAMES_IT[s.number] || "").toLowerCase().includes(term) ||
      s.number.toString().includes(term)
  );
  renderSurahList(filtered);
  renderAudioList(filtered);
});

// =========================
// SHOW SURAH (MODAL)
// =========================
async function showSurah(surah) {
  currentSurah = surah;
  DOM.modalContent.innerHTML = `
    <div class="loader-wrapper">
      <div class="spinner"></div>
    </div>
  `;
  DOM.modal.style.display = "flex";
  await renderSurahContent(surah);
}

// =========================
// RENDER SURAH CONTENT (BILINGUE)
// =========================
async function renderSurahContent(surah) {
  const container = DOM.modalContent;
  container.setAttribute("lang", "ar");

  const [resAr, resIt] = await Promise.all([
    fetch("https://api.alquran.cloud/v1/quran/ar.alafasy"),
    fetch("https://api.alquran.cloud/v1/quran/it.piccardo"),
  ]);

  const [dataAr, dataIt] = await Promise.all([resAr.json(), resIt.json()]);
  const surahAr = dataAr.data.surahs.find((s) => s.number === surah.number);
  const surahIt = dataIt.data.surahs.find((s) => s.number === surah.number);

  const ayatAr = surahAr.ayahs;
  const ayatIt = surahIt.ayahs;

  let html = "";

  const basmala = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";

  // Mostra sempre il basmala per tutte le sure tranne la 9
  if (surah.number !== 9) {
    html += `<div class="basmala">${basmala}</div>`;
  }

  // funzione per fare escape dei caratteri speciali in regex
  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // pattern regex che permette spazi arbitrari dove ci sono spazi nel basmala
  const basmalaPattern = escapeRegExp(basmala).replace(/\s+/g, "\\s*");
  const basmalaRegex = new RegExp(basmalaPattern);
  // (al momento non usato, ma pronto se vorrai usare la regex per rimuovere il basmala)

  html += ayatAr
    .map((a, i) => {
      let textAr = a.text;

      if (i === 0 && surah.number !== 1 && surah.number !== 9) {
        const words = textAr.trim().split(/\s+/);
        textAr = words.slice(4).join(" ").trim();
      }

      const ita = ayatIt[i]?.text || "";

      const arabicNum = a.numberInSurah
        .toString()
        .replace(/1/g, "١")
        .replace(/2/g, "٢")
        .replace(/3/g, "٣")
        .replace(/4/g, "٤")
        .replace(/5/g, "٥")
        .replace(/6/g, "٦")
        .replace(/7/g, "٧")
        .replace(/8/g, "٨")
        .replace(/9/g, "٩")
        .replace(/0/g, "٠");

      return `
      <div class="ayah-block">
        <div class="ayah-header">
          <div class="ayah-number">${arabicNum}</div>
          <button class="ayah-audio-btn" 
            data-audio="https://cdn.islamic.network/quran/audio/128/ar.alafasy/${a.number}.mp3" 
            aria-label="Riproduci ayah ${a.numberInSurah}">
            <i class="fa-solid fa-play"></i>
          </button>
        </div>
        <div class="ayah ayah-ar">${textAr}</div>
        <div class="ayah ayah-it">${ita}</div>
      </div>
    `;
    })
    .join("");

  container.innerHTML = html;

  DOM.modalTitleAr.textContent = surahAr.name;
  DOM.modalTitleIt.textContent = SURAH_NAMES_IT[surah.number];

  // Setup audio buttons for ayahs
  const buttons = container.querySelectorAll(".ayah-audio-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.audio;
      const icon = btn.querySelector("i");

      // If clicking the same button
      if (currentButton === btn && currentAudio) {
        if (!currentAudio.paused) {
          currentAudio.pause();
          icon.classList.replace("fa-pause", "fa-play");
        } else {
          currentAudio.play();
          icon.classList.replace("fa-play", "fa-pause");
        }
        return;
      }

      // Stop previous audio
      if (currentAudio) {
        currentAudio.pause();
        document
          .querySelectorAll(".ayah-audio-btn i")
          .forEach((i) => i.classList.replace("fa-pause", "fa-play"));
      }

      // Create new audio
      currentAudio = new Audio(url);
      currentButton = btn;

      icon.classList.replace("fa-play", "fa-pause");
      currentAudio.play();

      currentAudio.addEventListener("ended", () => {
        icon.classList.replace("fa-pause", "fa-play");
      });
    });
  });
}

// =========================
// MODAL MANAGEMENT
// =========================
DOM.closeModalBtn.onclick = closeModal;
window.onclick = (e) => e.target === DOM.modal && closeModal();
DOM.backButton.onclick = () => (window.location.href = "../index.html");

function closeModal() {
  DOM.modal.style.display = "none";

  // Stop any audio in modal
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Reset all play buttons
  document
    .querySelectorAll(".ayah-audio-btn i")
    .forEach((i) => i.classList.replace("fa-pause", "fa-play"));
}
