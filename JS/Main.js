const DURMIND_DATA = window.DURMIND_DATA || {};
const discordInvite = DURMIND_DATA.discordInvite || "https://discord.gg/rnnyVrwRfz";
const players = Array.isArray(DURMIND_DATA.players) ? DURMIND_DATA.players : [];
const events = Array.isArray(DURMIND_DATA.events) ? DURMIND_DATA.events : [];
const hallOfFame = DURMIND_DATA.hallOfFame || {
  lastChampion: "",
  lastEventId: "",
  subtitle: "",
  champions: [],
  achievements: [],
  records: [],
  media: []
};

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

function getEventParticipants(event) {
  const names = new Set();
  (event.brackets || []).forEach((round) => {
    (round.matches || []).forEach((match) => {
      if (match.p1) names.add(match.p1);
      if (match.p2) names.add(match.p2);
    });
  });
  return [...names];
}

function getEventMatches(event) {
  return (event.brackets || []).flatMap((round) =>
    (round.matches || []).map((match) => ({ ...match, round: round.round }))
  );
}

function renderEvents() {
  const grid = document.getElementById("eventsGrid");
  if (!grid) return;

  grid.innerHTML = events.map((event) => {
    const participants = getEventParticipants(event);
    const matches = getEventMatches(event);
    const coverStyle = event.image ? `style="--event-image: url('${escapeHtml(event.image)}')"` : "";

    return `
      <article class="event-card glass-panel" ${coverStyle} data-event-id="${escapeHtml(event.id)}" tabindex="0" role="button" aria-label="Відкрити турнір ${escapeHtml(event.title)}">
      <div class="event-cover" ${coverStyle}>
          <span class="event-type">${escapeHtml(event.type || "Event")}</span>
          <span class="status-pill status-${escapeHtml(event.status)}">${statusLabel(event.status)}</span>
        </div>

        <div class="event-body">
          <div class="event-title-block">
            <div class="event-meta-row">
              <span class="event-meta-pill">${escapeHtml(event.date)}</span>
              <span class="event-meta-pill">${escapeHtml(event.game || "Game")}</span>
            </div>
            <h3>${escapeHtml(event.title)}</h3>
            <p>${escapeHtml(event.description)}</p>
          </div>

          <div class="event-stats-row">
            <span class="event-stat-pill"><strong>${participants.length}</strong> players</span>
            <span class="event-stat-pill"><strong>${matches.length}</strong> matches</span>
            <span class="event-stat-pill">${escapeHtml(event.format || "Custom format")}</span>
          </div>

          <div class="event-action-row">
            <span class="event-winner">Winner: <strong>${escapeHtml(event.winner || "—")}</strong></span>
            <span class="event-open-link">Open tournament →</span>
          </div>
        </div>
      </article>
    `;
  }).join("");

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
const modalContent = document.querySelector("#eventModal .modal-content");

function openEventModal(eventId) {
  const event = events.find((item) => item.id === eventId);
  if (!event || !modal || !modalContent) return;

  modalTitle.textContent = event.title;
  modalMeta.textContent = `${event.date} • ${event.game || "Game"} • ${event.format || "Custom format"}`;
  modalStatus.textContent = statusLabel(event.status);
  modalStatus.className = `status-pill status-${event.status}`;
  modalContent.innerHTML = buildTournamentModal(event);

  modal.classList.add("visible");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  activateTournamentTabs(modalContent);
}

function closeEventModal() {
  if (!modal) return;
  modal.classList.remove("visible");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function buildTournamentModal(event) {
  const participants = getEventParticipants(event);
  const matches = getEventMatches(event);
  const imagePath = event.image ? String(event.image).replaceAll("\\", "/") : "";
  const coverStyle = imagePath ? `style="--event-image: url('${escapeHtml(imagePath)}');"` : "";

  return `
    <div class="tournament-shell">
      <section class="tournament-hero">
        <div class="tournament-cover" ${coverStyle} aria-label="${escapeHtml(event.title)} cover"></div>

        <div class="tournament-summary">
          <p>${escapeHtml(event.description)}</p>
          <div class="tournament-quick-stats">
            <div class="quick-stat"><span>Winner</span><strong>${escapeHtml(event.winner || "—")}</strong></div>
            <div class="quick-stat"><span>Players</span><strong>${participants.length}</strong></div>
            <div class="quick-stat"><span>Matches</span><strong>${matches.length}</strong></div>
          </div>
        </div>
      </section>

      <nav class="tournament-tabs" aria-label="Меню деталей турніру">
        <button class="tournament-tab is-active" type="button" data-tab="overview">Огляд</button>
        <button class="tournament-tab" type="button" data-tab="bracket">Сітка</button>
        <button class="tournament-tab" type="button" data-tab="matches">Матчі</button>
        <button class="tournament-tab" type="button" data-tab="players">Учасники</button>
      </nav>

      <section class="tournament-panel is-active" data-panel="overview">
        ${buildOverviewPanel(event, participants, matches)}
      </section>

      <section class="tournament-panel" data-panel="bracket">
        <div class="brackets tournament-brackets">${buildBrackets(event.brackets || [])}</div>
      </section>

      <section class="tournament-panel" data-panel="matches">
        ${buildMatchesPanel(matches)}
      </section>

      <section class="tournament-panel" data-panel="players">
        ${buildParticipantsPanel(participants, event.winner)}
      </section>
    </div>
  `;
}

function buildOverviewPanel(event, participants, matches) {
  const highlights = Array.isArray(event.highlights) && event.highlights.length
    ? event.highlights
    : ["Інформація про ключові моменти турніру буде додана пізніше."];

  const rules = Array.isArray(event.rules) && event.rules.length
    ? event.rules
    : ["Правила турніру поки не вказані."];

  return `
    <div class="tournament-overview-grid">
      <article class="info-card">
        <span>Format</span>
        <strong>${escapeHtml(event.format || "Custom format")}</strong>
        <p>${escapeHtml(event.game || "Game")} • ${escapeHtml(event.mapPool || "Map pool not specified")}</p>
      </article>
      <article class="info-card">
        <span>Reward</span>
        <strong>${escapeHtml(event.prize || "Community recognition")}</strong>
        <p>Переможець потрапляє в історію турнірів DURMIND.</p>
      </article>
      <article class="info-card">
        <span>Highlights</span>
        <strong>${highlights.length} notes</strong>
        <p>${highlights.map((item) => `• ${escapeHtml(item)}`).join("<br>")}</p>
      </article>
      <article class="info-card">
        <span>Rules</span>
        <strong>${rules.length} rules</strong>
        <p>${rules.map((item) => `• ${escapeHtml(item)}`).join("<br>")}</p>
      </article>
    </div>
  `;
}

function buildParticipantsPanel(participants, winner) {
  if (!participants.length) {
    return `<p class="modal-meta">Учасники поки не вказані.</p>`;
  }

  return `
    <div class="participants-grid">
      ${participants.map((name) => `
        <article class="participant-card ${name === winner ? "is-winner" : ""}">
          <span>${name === winner ? "Winner" : "Player"}</span>
          <strong>${escapeHtml(name)}</strong>
        </article>
      `).join("")}
    </div>
  `;
}

function buildMatchesPanel(matches) {
  if (!matches.length) {
    return `<p class="modal-meta">Матчі поки відсутні.</p>`;
  }

  return `
    <div class="matches-list">
      ${matches.map((match) => `
        <article class="match-row-card">
          <span>${escapeHtml(match.round)}</span>
          <div class="match-row-players">
            <strong>${escapeHtml(match.p1 || "—")}</strong>
            &nbsp;vs&nbsp;
            <strong>${escapeHtml(match.p2 || "—")}</strong>
          </div>
          <div class="match-row-score">${escapeHtml(match.score || "—")}</div>
        </article>
      `).join("")}
    </div>
  `;
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
            <span class="player-left ${match.winner === match.p1 ? "is-match-winner" : ""}">${escapeHtml(match.p1 || "—")}</span>
            <strong class="match-score">${escapeHtml(match.score || "—")}</strong>
            <span class="player-right ${match.winner === match.p2 ? "is-match-winner" : ""}">${escapeHtml(match.p2 || "—")}</span>
          </div>
        </article>
      `).join("")}
    </section>
  `).join("");
}

function activateTournamentTabs(root) {
  const tabs = root.querySelectorAll(".tournament-tab");
  const panels = root.querySelectorAll(".tournament-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
      panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === target));
    });
  });
}


const hallModal = document.getElementById("hallModal");
const hallContent = document.getElementById("hallContent");
const openHallButton = document.getElementById("openHallOfFame");

function findPlayer(name) {
  return players.find((player) => player.name === name) || null;
}

function getAchievementCount(name) {
  return hallOfFame.achievements.filter((item) => item.player === name).length;
}

function renderHallPreview() {
  const button = openHallButton;
  if (!button) return;

  const champion = findPlayer(hallOfFame.lastChampion);
  const championEvent = events.find((event) => event.id === hallOfFame.lastEventId);
  if (!champion || !championEvent) return;

  const image = button.querySelector(".fame-avatar-wrap img");
  const name = button.querySelector(".fame-showcase-top strong");
  const eventLabel = button.querySelector(".fame-champion-info span");
  const title = button.querySelector(".fame-champion-info strong");

  if (image) {
    image.src = champion.avatar;
    image.alt = champion.name;
  }
  if (name) name.textContent = champion.name;
  if (eventLabel) eventLabel.textContent = `Чемпіон ${championEvent.title}`;
  if (title) title.textContent = "Переможець останнього турніру";
}

function openHallModal() {
  if (!hallModal || !hallContent) return;
  hallContent.innerHTML = buildHallModal();
  hallModal.classList.add("visible");
  hallModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  activateHallTabs(hallContent);
}

function closeHallModal() {
  if (!hallModal) return;
  hallModal.classList.remove("visible");
  hallModal.setAttribute("aria-hidden", "true");
  if (!modal?.classList.contains("visible")) {
    document.body.classList.remove("modal-open");
  }
}

function buildHallModal() {
  const champion = findPlayer(hallOfFame.lastChampion);
  const championEvent = events.find((event) => event.id === hallOfFame.lastEventId);
  const totalAchievements = hallOfFame.achievements.length;

  return `
    <div class="hall-shell">
      <section class="hall-hero">
        <div class="hall-hero-player">
          <div class="hall-hero-avatar">
            <img src="${escapeHtml(champion?.avatar || "./photo/DRM.png")}" alt="${escapeHtml(champion?.name || "Чемпіон")}" loading="lazy" />
          </div>
          <div>
            <span class="hall-label">Останній чемпіон</span>
            <h3>${escapeHtml(champion?.name || "—")}</h3>
            <p>${escapeHtml(championEvent?.title || "Останній турнір")} • ${escapeHtml(championEvent?.date || "—")}</p>
          </div>
        </div>
        <div class="hall-hero-stats">
          <div><span>Титули</span><strong>${hallOfFame.champions.length}</strong></div>
          <div><span>Досягнення</span><strong>${totalAchievements}</strong></div>
          <div><span>Рекорди</span><strong>${hallOfFame.records.length}</strong></div>
        </div>
      </section>

      <nav class="hall-tabs" aria-label="Меню залу слави">
        <button class="hall-tab is-active" type="button" data-hall-tab="overview">Огляд</button>
        <button class="hall-tab" type="button" data-hall-tab="champions">Чемпіони</button>
        <button class="hall-tab" type="button" data-hall-tab="achievements">Досягнення</button>
        <button class="hall-tab" type="button" data-hall-tab="media">Медіа</button>
      </nav>

      <section class="hall-panel is-active" data-hall-panel="overview">
        ${buildHallOverview()}
      </section>
      <section class="hall-panel" data-hall-panel="champions">
        ${buildHallChampions()}
      </section>
      <section class="hall-panel" data-hall-panel="achievements">
        ${buildHallAchievements()}
      </section>
      <section class="hall-panel" data-hall-panel="media">
        ${buildHallMedia()}
      </section>
    </div>
  `;
}

function buildHallOverview() {
  return `
    <div class="hall-overview-grid">
      ${hallOfFame.records.map((record) => `
        <article class="hall-record-card">
          <span>${escapeHtml(record.label)}</span>
          <strong>${escapeHtml(record.value)}</strong>
          <p>${escapeHtml(record.detail)}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function buildHallChampions() {
  return `
    <div class="hall-champions-list">
      ${hallOfFame.champions.map((champion) => {
        const player = findPlayer(champion.player);
        return `
          <article class="hall-champion-row">
            <img src="${escapeHtml(player?.avatar || "./photo/DRM.png")}" alt="${escapeHtml(champion.player)}" loading="lazy" />
            <div>
              <span>${escapeHtml(champion.badge)} • ${escapeHtml(champion.date)}</span>
              <strong>${escapeHtml(champion.player)} — ${escapeHtml(champion.title)}</strong>
              <p>${escapeHtml(champion.note)}</p>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function buildHallAchievements() {
  return `
    <div class="hall-achievements-grid">
      ${hallOfFame.achievements.map((achievement) => {
        const player = findPlayer(achievement.player);
        return `
          <article class="hall-achievement-card">
            <div class="hall-achievement-top">
              <img src="${escapeHtml(player?.avatar || "./photo/DRM.png")}" alt="${escapeHtml(achievement.player)}" loading="lazy" />
              <span>${escapeHtml(achievement.type)}</span>
            </div>
            <strong>${escapeHtml(achievement.title)}</strong>
            <p>${escapeHtml(achievement.description)}</p>
            <em>${escapeHtml(achievement.player)} • ${getAchievementCount(achievement.player)} досягнень</em>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function buildHallMedia() {
  return `
    <div class="hall-media-grid">
      ${hallOfFame.media.map((item) => `
        <article class="hall-media-card ${item.src ? "has-media" : "is-placeholder"}">
          ${item.src ? `<img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.title)}" loading="lazy" />` : `<div class="hall-media-placeholder">${escapeHtml(item.type)}</div>`}
          <div>
            <span>${escapeHtml(item.type)}</span>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.description)}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function activateHallTabs(root) {
  const tabs = root.querySelectorAll(".hall-tab");
  const panels = root.querySelectorAll(".hall-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.hallTab;
      tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
      panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.hallPanel === target));
      hallContent?.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

openHallButton?.addEventListener("click", openHallModal);
openHallButton?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openHallModal();
  }
});

document.querySelectorAll("[data-close-hall]").forEach((element) => {
  element.addEventListener("click", closeHallModal);
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeEventModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeEventModal();
    closeHallModal();
  }
});

renderEvents();
renderPlayers();
renderHallPreview();

window.DURMIND = {
  players,
  events,
  hallOfFame,
  openEventModal,
  openHallModal
};
