(() => {
  /* ===== ЗІРКИ У ЛОГОТИПІ ===== */
  const canvas = document.getElementById('brandStars');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let stars = [];
    const STAR_COUNT = 35;

    function resize() {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      initStars();
    }

    function initStars() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width / devicePixelRatio,
          y: Math.random() * canvas.height / devicePixelRatio,
          r: Math.random() * 1.2 + 0.4,
          speed: Math.random() * 0.4 + 0.1,
          alpha: 0.4 + Math.random() * 0.6
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let s of stars) {
        ctx.fillStyle = `rgba(180,114,255,${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        s.y += s.speed;
        if (s.y > canvas.height / devicePixelRatio + 2) {
          s.y = -2;
          s.x = Math.random() * (canvas.width / devicePixelRatio);
        }
      }
      requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
  }

  /* ===== ПЛАВНИЙ СКРОЛ ===== */
  const scrollButton = document.getElementById('scrollToEvents');
  if (scrollButton) {
    scrollButton.addEventListener('click', () => {
      const target = document.getElementById('events');
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
        smoothScrollTo(offsetTop, 1200);
      }
    });
  }

  function smoothScrollTo(targetY, duration = 1200) {
    const startY = window.scrollY || window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;
    function anim(time) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const t = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      window.scrollTo(0, startY + distance * ease);
      if (t < 1) requestAnimationFrame(anim);
    }
    requestAnimationFrame(anim);
  }

  /* ===== Анімація появи карток ===== */
  const cards = document.querySelectorAll('.player-card, .event-card');
  if (cards.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    cards.forEach(card => observer.observe(card));
  }
})();


const discordButton = document.querySelector('.Discord');
if (discordButton) {
  discordButton.addEventListener('click', () => {
    window.open('https://discord.gg/rnnyVrwRfz', '_blank');
  });
}


"/* ===== ДОДАВАННЯ ІНФОРМАЦІЇ ПРО ГРАВЦІВ ===== */"
const playersInfo = {
  "Waysiemens": {
    description: "Надихаючий лідер і капітан цього корабля.",
    socials: {
      steam: "https://steamcommunity.com/id/waysiemens/",
      discord: "https://discord.gg/rnnyVrwRfz",
      instagram: "https://www.instagram.com/waysiemens?igsh=Y2dobm53bTQ4aDJi",
    }
  },
  "SMAKOVV": {
    description: "Майстер агресії та енергії, завжди йде першим.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199237357499",
      instagram: "",
      discord: "https://discord.gg/rnnyVrwRfz",
    }
  },
  "Bareski": {
    description: "Стратег і душа компанії, знає, як повернути бій на свою користь.",
    socials: {
      steam: "https://steamcommunity.com/id/bAresk1",
      instagram: "",
      discord: "https://discord.gg/rnnyVrwRfz",
    }
  },
  "Edgar": {
    description: "Джерело позитиву та адреналіну, робить атмосферу живою.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199139831895",
      instagram: "",
      discord: "https://discord.gg/rnnyVrwRfz",
    }
  },
  "Mental": {
    description: "Аналітик і філософ команди, бачить глибше за інших.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561198949993671",
      instagram: "",
      discord: "https://discord.gg/rnnyVrwRfz",
    }
  },
  "TUR-9000": {
    description: "Технар і мозок команди, холоднокровний та точний.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561198392497468",
      instagram: "",
      discord: "https://discord.gg/rnnyVrwRfz",
    }
  },
  "Prok": {
    description: "Надійний тіммейт, без якого жоден бій не буде таким, як раніше.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199119910502",
      instagram: "",
      discord: "https://discord.gg/rnnyVrwRfz",
    }
  },
  "Ger4eek": {
    description: "Мисливець, який відчуває слабину суперника за версту, у пасивному режимі.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199223642471",
      instagram: "",
      discord: "https://discord.gg/rnnyVrwRfz",
    }
  },
  "Kiruha": {
    description: "Імпульсивний і зухвалий, робить шоу на полі бою, у пасивному режимі.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199046070249",
      instagram: "",
      discord: "https://discord.gg/rnnyVrwRfz",
    }
  },
  "Shootka": {
    description: "Молодий, але амбітний — майбутнє команди вже тут, у пасивному режимі.",
    socials: {
      steam: "https://steamcommunity.com/id/1559507142",
      instagram: "",
      discord: "https://discord.gg/rnnyVrwRfz",
    }
  },
  "Ilty": {
    description: "влучний стрілець, завжди потрапляє в ціль — і в грі, і в житті.",
    socials: {
      steam: "https://steamcommunity.com/id/lItycs/",
      instagram: "",
      discord: "https://discord.gg/rnnyVrwRfz",
    }
  }
  
  // додаєш інших за потреби
};

/* ===== Іконки соцмереж (SVG) ===== */
function getSocialIconSVG(platform) {
  switch (platform) {
    case "discord":
  return `
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
    </svg>
  `;
    case "steam":
  return `
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z"/>
      <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048"/>
    </svg>
  `;
    case "instagram":
  return `
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
    </svg>
  `;
    default:
      return "";
  }
}

/* ===== Открытие/закрытие карток ===== */
document.querySelectorAll(".player-card").forEach(card => {
  card.addEventListener("click", () => {

    document.querySelectorAll(".player-card.expanded").forEach(opened => {
      if (opened !== card) opened.classList.remove("expanded");
    });

    card.classList.toggle("expanded");

    const name = card.querySelector("h3").textContent.trim();

    if (playersInfo[name]) {
      const descBox = card.querySelector(".player-description");
      const socialsBox = card.querySelector(".player-socials");

      descBox.textContent = playersInfo[name].description;

      socialsBox.innerHTML = "";

      for (const [platform, url] of Object.entries(playersInfo[name].socials)) {
        if (url.trim() !== "") {

          const icon = document.createElement("a");
          icon.href = url;
          icon.target = "_blank";
          icon.className = "social-icon";
          icon.dataset.social = platform;

          icon.innerHTML = getSocialIconSVG(platform);

          socialsBox.appendChild(icon);
        }
      }
    }
  });
});



/* ===== TOURNAMENT MODAL & DYNAMIC BRACKETS ===== */
(() => {
  // ------------ Пример данных (редагуй/додавай) ------------
  // Ключі eventId мають відповідати data-event-id на картках (або можна підставити індекс)
  const eventsData = {
    "cs1v1": {
      id: "cs1v1",
      title: "CS 1 vs 1",
      date: "Жовтень 25, 2025 • 19:00",
      status: "completed", // "live" | "upcoming" | "completed"
      image: "./photo/cs21v1.png",
      winner: "Ilty",
      description: "Локальний турнір серед гравців команди. Напружені поєдинки та відмінні перестрілки.",
      brackets: [
        {
          round: "Quarterfinals",
          matches: [
            { p1: "TUR-9000", p2: "SMAKOVV", score: "1 : 0", winner: "TUR-9000" },
            { p1: "Bareski", p2: "Mental", score: "0 : 1", winner: "Mental" },
            { p1: "Ger4eek", p2: "Waysiemens", score: "1 : 0", winner: "Ger4eek" },
          ]
        },
        {
          round: "Semifinals",
          matches: [
            { p1: "Mental", p2: "Qawoonchik", score: "1 : 0", winner: "Mental" },
            { p1: "Ilty", p2: "Ger4eek", score: "1 : 0", winner: "Ilty" },
            { p1: "TUR-9000", p2: "Mental", score: "1 : 0", winner: "TUR-9000" },
          ]
        },
        {
          round: "Final",
          matches: [
            { p1: "TUR-9000", p2: "Ilty", score: "0 : 1", winner: "Ilty" }
          ]
        }
      ]
    },

    // приклад live-турніру
    "summer-cup": {
      id: "summer-cup",
      title: "Summer Cup - Live",
      date: "Сьогодні • 20:30",
      status: "live",
      image: "",
      winner: "",
      description: "Прямий ефір турніру — слідкуй за оновленнями.",
      brackets: [
        {
          round: "Quarterfinals",
          matches: [
            { p1: "Kiruha", p2: "Shootka", score: "0 : 1", winner: "Shootka" },
            { p1: "Ilty", p2: "Mental", score: "", winner: "" }
          ]
        }
      ]
    }
  };

  // ------------ Елементи DOM ------------
  const modal = document.getElementById("tournamentModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMeta = document.getElementById("modalMeta");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const modalWinner = document.getElementById("modalWinner");
  const bracketsWrap = document.getElementById("bracketsWrap");

  // Відкрити модал по event-card
  document.querySelectorAll(".event-card").forEach((card, idx) => {
    // додатково можна задати data-event-id в HTML; якщо немає — використовуємо перший ключ
    const eventId = card.dataset.eventId || Object.keys(eventsData)[idx] || null;
    if (!eventId || !eventsData[eventId]) return;

    // оновити превʼю на картці (дата/статус/переможець)
    refreshEventCard(card, eventsData[eventId]);

    card.addEventListener("click", (e) => {
      openEventModal(eventsData[eventId]);
    });
  });

  // Закриття (по бекдропу, кнопкам, ESC)
  document.querySelectorAll("[data-close]").forEach(el => {
    el.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  function openEventModal(data) {
    if (!data) return;
    modalTitle.textContent = data.title || "Турнір";
    modalDescription.textContent = data.description || "";
    modalWinner.textContent = data.winner || "—";

    // meta: date • status • winner
    const statusLabel = renderStatusLabel(data.status);
    modalMeta.innerHTML = `${data.date || "—"} • ${statusLabel}`;

    // image
    if (data.image) {
      modalImage.src = data.image;
      modalImage.classList.remove("hidden");
    } else {
      modalImage.classList.add("hidden");
    }

    // чистимо та будуємо сітку
    bracketsWrap.innerHTML = "";
    buildBrackets(data.brackets || []);

    // показати модал
    modal.classList.add("visible");
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    // невеликий таймаут під анімацію
    setTimeout(() => { bracketsWrap.innerHTML = ""; }, 320);
  }

  function renderStatusLabel(status) {
    if (!status) return '<span class="status-badge status-upcoming">UPCOMING</span>';
    if (status === "live") return '<span class="status-badge status-live">LIVE</span>';
    if (status === "completed") return '<span class="status-badge status-completed">COMPLETED</span>';
    return `<span class="status-badge status-upcoming">${status.toUpperCase()}</span>`;
  }

  // ------------ BUILD BRACKETS (block style) ------------
  function buildBrackets(brackets) {
    // expect brackets = [{ round: "Quarterfinals", matches: [ {p1, p2, score, winner}, ... ] }, ...]
    if (!Array.isArray(brackets) || brackets.length === 0) {
      bracketsWrap.innerHTML = '<p class="muted">Сітка відсутня.</p>';
      return;
    }

    brackets.forEach((roundObj, roundIndex) => {
      const roundEl = document.createElement("div");
      roundEl.className = "bracket-round";

      const title = document.createElement("div");
      title.className = "round-title";
      title.textContent = roundObj.round || `Round ${roundIndex+1}`;
      roundEl.appendChild(title);

      roundObj.matches.forEach((m, matchIndex) => {
        const match = document.createElement("div");
        match.className = "match-card enter";
        // якщо є переможець — підсвітити
        if (m.winner) match.classList.add("has-winner");

        // структура матчу
        match.innerHTML = `
          <div class="match-player">
            <span class="player-left">${escapeHtml(m.p1 || "—")}</span>
            <strong class="match-score">${escapeHtml(m.score || "") || "—"}</strong>
            <span class="player-right">${escapeHtml(m.p2 || "—")}</span>
          </div>
        `;
        // додатково підсвітити карточку якщо є win
        if (m.winner) {
          // покажемо winner-клас якщо p1 або p2 співпадає
          if (m.winner === m.p1) {
            // підсвітити лівого гравця (реалізовано на карточці через клас)
            // додамо декоративний клас
            match.classList.add("winner");
          } else if (m.winner === m.p2) {
            match.classList.add("winner");
          } else {
            // якщо winner не співпадає з p1/p2 — все одно підсвічуємо
            match.classList.add("winner");
          }
        }

        // опціонально: додати tooltip або onclick щоб показати профіль гравця
        // приклад: клік по match відкриває невеликий alert (можна змінити)
        match.addEventListener("click", () => {
          // наприклад виділити матч в UI або скопіювати результат
          match.classList.toggle("selected");
        });

        roundEl.appendChild(match);
      });

      bracketsWrap.appendChild(roundEl);
    });
  }

  // Utility: просте екранування
  function escapeHtml(str) {
    if (!str && str !== 0) return "";
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // ------------ Refresh preview on event-card (synchronize) ------------
  function refreshEventCard(cardEl, data) {
    // додаємо короткий превʼю (дата, статус, переможець)
    // Створимо/оновимо блок preview в картці
    let meta = cardEl.querySelector(".event-meta");
    if (!meta) {
      meta = document.createElement("div");
      meta.className = "event-meta";
      meta.style.marginTop = "10px";
      meta.style.fontSize = "0.9rem";
      meta.style.color = "var(--text-muted)";
      cardEl.appendChild(meta);
    }
    const statusText = data.status ? data.status.toUpperCase() : "UPCOMING";
    meta.innerHTML = `${data.date || "—"} • <span style="color:var(--accent);font-weight:700">${statusText}</span> • ${data.winner || "—"}`;
  }

  // ------------ PUBLIC HELPERS (можеш викликати з консолі) ------------
  window.DURMIND = window.DURMIND || {};
  window.DURMIND.eventsData = eventsData;

  window.DURMIND.updateEvent = function(eventId, newData) {
    if (!eventsData[eventId]) return;
    Object.assign(eventsData[eventId], newData);
    // знайти картку і оновити preview
    const card = document.querySelector(`.event-card[data-event-id="${eventId}"]`);
    if (card) refreshEventCard(card, eventsData[eventId]);
  };

  // клік по бекдропу закриває модаль
  modal.querySelector(".modal-backdrop")?.addEventListener("click", closeModal);

})();

