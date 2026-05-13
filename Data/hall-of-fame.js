// DURMIND Hall of Fame data.
// Champions, achievements, records and media are maintained here.
window.DURMIND_DATA = window.DURMIND_DATA || {};

window.DURMIND_DATA.hallOfFame = {
  lastChampion: "Ilty",
  lastEventId: "Cs 1v1 cup",
  subtitle: "Архів чемпіонів, MVP, рекордів і моментів DURMIND.",
  champions: [
    {
      player: "Ilty",
      event: "CS 1 vs 1",
      title: "Перший чемпіон DURMIND",
      date: "25 жовтня 2025",
      badge: "Чемпіон",
      note: "Перемога у фіналі проти TUR-9000 та перший запис у залі слави."
    }
  ],
  achievements: [
    { player: "Ilty", type: "Чемпіон", title: "Переможець CS 1 vs 1", description: "Переможець першого локального турніру DURMIND." },
    { player: "TUR-9000", type: "Фіналіст", title: "Фінальний бос", description: "Дійшов до фіналу та провів ключовий матч турніру." },
    { player: "Mental", type: "Серія", title: "Тактичний прохід", description: "Сильний прохід крізь сітку та стабільна гра у півфіналах." },
    { player: "Ger4eek", type: "Момент", title: "Мисливський момент", description: "Один із найпомітніших матчів ранньої стадії турніру." },
    { player: "Waysiemens", type: "Основа", title: "Ядро комʼюніті", description: "Підтримує структуру команди та атмосферу DURMIND." }
  ],
  records: [
    { label: "Перший чемпіон", value: "Ilty", detail: "CS 1 vs 1" },
    { label: "Перший фінал", value: "TUR-9000 vs Ilty", detail: "0 : 1" },
    { label: "Турнірів в архіві", value: "1", detail: "готово до розширення" },
    { label: "Матчів у першому архіві", value: "7", detail: "за поточною сіткою" }
  ],
  media: [
    { type: "зображення", title: "Обкладинка CS 1 vs 1", description: "Обкладинка першого турніру. Можна замінити на скріншот, постер або хайлайт.", src: "./photo/cs21v1.png" },
    { type: "відео", title: "Місце для відео", description: "Сюди пізніше можна додати YouTube/Twitch/Discord clip або локальне відео.", src: "" },
    { type: "момент", title: "Легендарний момент", description: "Плейсхолдер для найсмішнішого або найнапруженішого моменту турніру.", src: "" }
  ],
};
