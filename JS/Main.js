const discordInvite = "https://discord.gg/rnnyVrwRfz";

const players = [
  {
    name: "Waysiemens",
    role: "Лідер",
    avatar: "https://avatars.fastly.steamstatic.com/07509e44e17b8ec831bf8afc8937da22d1c4e569_full.jpg",
    description: "Надихаючий лідер і капітан цього корабля.",
    socials: {
      steam: "https://steamcommunity.com/id/waysiemens/",
      discord: discordInvite,
      instagram: "https://www.instagram.com/waysiemens?igsh=Y2dobm53bTQ4aDJi"
    }
  },
  {
    name: "SMAKOVV",
    role: "Майстер",
    avatar: "https://avatars.fastly.steamstatic.com/f448911aa5502dee51341fd6f16b9b8445921a2b_full.jpg",
    description: "Майстер агресії та енергії, завжди йде першим.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199237357499",
      discord: discordInvite
    }
  },
  {
    name: "Bareski",
    role: "Стратег",
    avatar: "https://avatars.fastly.steamstatic.com/47b6f525638fffe116447e4c6e44309e746a5051_full.jpg",
    description: "Стратег і душа компанії, знає, як повернути бій на свою користь.",
    socials: {
      steam: "https://steamcommunity.com/id/bAresk1",
      discord: discordInvite
    }
  },
  {
    name: "Edgar",
    role: "Джерело позитиву",
    avatar: "https://avatars.fastly.steamstatic.com/4f787c09d9d0499153f0049c7a5e92522f505078_full.jpg",
    description: "Джерело позитиву та адреналіну, робить атмосферу живою.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199139831895",
      discord: discordInvite
    }
  },
  {
    name: "Mental",
    role: "Аналітик",
    avatar: "https://avatars.fastly.steamstatic.com/4b23028a3bf894c44ed0ad8b5eab28c830357d64_full.jpg",
    description: "Аналітик і філософ команди, бачить глибше за інших.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561198949993671",
      discord: discordInvite
    }
  },
  {
    name: "TUR-9000",
    role: "Технар",
    avatar: "https://avatars.fastly.steamstatic.com/d6273d62957a51d14af3c72156047ea9dc8775f4_full.jpg",
    description: "Технар і мозок команди, холоднокровний та точний.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561198392497468",
      discord: discordInvite
    }
  },
  {
    name: "Prok",
    role: "Надійний тімейт",
    avatar: "https://avatars.fastly.steamstatic.com/788563bb5db7136c3fbb5a74094bd99616719978_full.jpg",
    description: "Надійний тіммейт, без якого жоден бій не буде таким, як раніше.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199119910502",
      discord: discordInvite
    }
  },
  {
    name: "Ger4eek",
    role: "Мисливець",
    avatar: "https://avatars.fastly.steamstatic.com/b5053c0d8fca283b139357191c54ec74745842fd_full.jpg",
    description: "Мисливець, який відчуває слабину суперника за версту.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199223642471",
      discord: discordInvite
    }
  },
  {
    name: "Kiruha",
    role: "Шоумен",
    avatar: "https://avatars.fastly.steamstatic.com/cfe727a38f345c1d5d92c5844f6cf8f5b22c3279_full.jpg",
    description: "Імпульсивний і зухвалий, робить шоу на полі бою.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199046070249",
      discord: discordInvite
    }
  },
  {
    name: "Shootka",
    role: "Майбутнє команди",
    avatar: "https://avatars.fastly.steamstatic.com/e3aff17dd67b4d448f209f18a4bdac19d17fbb53_full.jpg",
    description: "Молодий, але амбітний — майбутнє команди вже тут.",
    socials: {
      steam: "https://steamcommunity.com/id/1559507142",
      discord: discordInvite
    }
  },
  {
    name: "Ilty",
    role: "Стрілок",
    avatar: "https://shared.fastly.steamstatic.com/community_assets/images/items/400910/bdca20f4113c926a80de957d01e7a550fd5fb19f.gif",
    description: "Влучний стрілець, завжди потрапляє в ціль — і в грі, і в житті.",
    socials: {
      steam: "https://steamcommunity.com/id/lItycs/",
      discord: discordInvite
    }
  }
];

const events = [
  {
    id: "cs1v1",
    title: "CS 1 vs 1",
    date: "25 жовтня 2025 • 19:00",
    status: "completed",
    image: "./photo/cs21v1.png",
    winner: "Ilty",
    description: "Локальний турнір серед гравців команди. Напружені поєдинки, швидкі дуелі та перший великий запис в історії DURMIND.",
    brackets: [
      {
        round: "Quarterfinals",
        matches: [
          { p1: "TUR-9000", p2: "SMAKOVV", score: "1 : 0", winner: "TUR-9000" },
          { p1: "Bareski", p2: "Mental", score: "0 : 1", winner: "Mental" },
          { p1: "Ger4eek", p2: "Waysiemens", score: "1 : 0", winner: "Ger4eek" }
        ]
      },
      {
        round: "Semifinals",
        matches: [
          { p1: "Mental", p2: "Qawoonchik", score: "1 : 0", winner: "Mental" },
          { p1: "Ilty", p2: "Ger4eek", score: "1 : 0", winner: "Ilty" },
          { p1: "TUR-9000", p2: "Mental", score: "1 : 0", winner: "TUR-9000" }
        ]
      },
      {
        round: "Final",
        matches: [
          { p1: "TUR-9000", p2: "Ilty", score: "0 : 1", winner: "Ilty" }
        ]
      }
    ]
  }
];

const iconMap = {
  discord: `
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
    </svg>`,
  steam: `
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z"/>
      <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048"/>
    </svg>`,
  instagram: `
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
    </svg>`
};

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle?.classList.remove("active");
    menuToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function statusLabel(status) {
  const labels = {
    completed: "Completed",
    live: "Live",
    upcoming: "Upcoming"
  };

  return labels[status] || "Upcoming";
}

function renderEvents() {
  const grid = document.getElementById("eventsGrid");
  if (!grid) return;

  grid.innerHTML = events.map((event) => `
    <article class="event-card glass-panel" data-event-id="${escapeHtml(event.id)}" tabindex="0" role="button" aria-label="Відкрити турнір ${escapeHtml(event.title)}">
      <div class="event-card-head">
        <div>
          <span class="event-card-meta">${escapeHtml(event.date)}</span>
          <h3>${escapeHtml(event.title)}</h3>
        </div>
        <span class="status-pill status-${escapeHtml(event.status)}">${statusLabel(event.status)}</span>
      </div>
      <p>${escapeHtml(event.description)}</p>
      <div class="event-card-footer">
        <span>Winner: ${escapeHtml(event.winner || "—")}</span>
        <span>Open bracket →</span>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".event-card").forEach((card) => {
    const open = () => openEventModal(card.dataset.eventId);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function getPlayerAccent(index) {
  const accents = ["violet", "blue", "silver", "rose", "mint", "amber"];
  return accents[index % accents.length];
}

function getPlayerInitials(name) {
  return String(name || "D")
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getRoleTag(role) {
  const value = String(role || "").toLowerCase();
  if (value.includes("лідер")) return "Captain";
  if (value.includes("аналітик")) return "Tactics";
  if (value.includes("технар")) return "Tech";
  if (value.includes("стрілок")) return "Aim";
  if (value.includes("шоумен")) return "Show";
  if (value.includes("майбутнє")) return "Rookie";
  return "Member";
}

function renderPlayers() {
  const grid = document.getElementById("teamGrid");
  if (!grid) return;

  grid.innerHTML = players.map((player, index) => {
    const socials = Object.entries(player.socials || {})
      .filter(([, url]) => Boolean(url))
      .map(([platform, url]) => `
        <a class="social-icon social-${escapeHtml(platform)}" href="${escapeHtml(url)}" target="_blank" rel="noopener" aria-label="${escapeHtml(player.name)} ${escapeHtml(platform)}">
          ${iconMap[platform] || platform[0]?.toUpperCase() || "?"}
        </a>
      `).join("");

    const tag = getRoleTag(player.role);
    const accent = getPlayerAccent(index);
    const initials = getPlayerInitials(player.name);

    return `
      <article class="player-card glass-panel player-accent-${accent}" tabindex="0" aria-label="Профіль гравця ${escapeHtml(player.name)}">
        <div class="player-card-glow" aria-hidden="true"></div>

        <div class="player-media">
          <div class="player-avatar">
            <img src="${escapeHtml(player.avatar)}" alt="${escapeHtml(player.name)}" loading="lazy" />
          </div>
          <div class="player-initials" aria-hidden="true">${escapeHtml(initials)}</div>
          <span class="player-status"><span></span>Active</span>
        </div>

        <div class="player-info">
          <div class="player-title-row">
            <div>
              <h3>${escapeHtml(player.name)}</h3>
              <span class="player-role">${escapeHtml(player.role)}</span>
            </div>
            <span class="player-tag">${escapeHtml(tag)}</span>
          </div>

          <p class="player-description">${escapeHtml(player.description)}</p>

          <div class="player-bottom">
            <div class="player-socials">${socials}</div>
            <span class="player-more">Profile</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

const modal = document.getElementById("eventModal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalStatus = document.getElementById("modalStatus");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalWinner = document.getElementById("modalWinner");
const bracketsWrap = document.getElementById("bracketsWrap");

function openEventModal(eventId) {
  const event = events.find((item) => item.id === eventId);
  if (!event || !modal) return;

  modalTitle.textContent = event.title;
  modalMeta.textContent = event.date;
  modalStatus.textContent = statusLabel(event.status);
  modalStatus.className = `status-pill status-${event.status}`;
  modalDescription.textContent = event.description;
  modalWinner.textContent = event.winner || "—";

  if (event.image) {
    modalImage.src = event.image;
    modalImage.alt = event.title;
    modalImage.classList.remove("is-hidden");
  } else {
    modalImage.classList.add("is-hidden");
  }

  bracketsWrap.innerHTML = buildBrackets(event.brackets || []);

  modal.classList.add("visible");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeEventModal() {
  if (!modal) return;
  modal.classList.remove("visible");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function buildBrackets(brackets) {
  if (!Array.isArray(brackets) || brackets.length === 0) {
    return `<p class="modal-meta">Сітка поки відсутня.</p>`;
  }

  return brackets.map((round) => `
    <section class="bracket-round">
      <div class="round-title">${escapeHtml(round.round)}</div>
      ${(round.matches || []).map((match) => `
        <article class="match-card ${match.winner ? "winner" : ""}">
          <div class="match-player">
            <span class="player-left">${escapeHtml(match.p1 || "—")}</span>
            <strong class="match-score">${escapeHtml(match.score || "—")}</strong>
            <span class="player-right">${escapeHtml(match.p2 || "—")}</span>
          </div>
        </article>
      `).join("")}
    </section>
  `).join("");
}

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeEventModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeEventModal();
});

renderEvents();
renderPlayers();

window.DURMIND = {
  players,
  events,
  openEventModal
};

