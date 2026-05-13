// DURMIND events and tournament data.
// Add new tournaments here.
window.DURMIND_DATA = window.DURMIND_DATA || {};

window.DURMIND_DATA.events = [
  {
    id: "cs1v1",
    title: "CS 1 vs 1 cup",
    date: "25 жовтня 2025 • 19:00",
    status: "completed",
    type: "Локальний турнір",
    game: "Counter-Strike 2",
    format: "Single Elimination • BO1",
    image: "./photo/cs21v1.png",
    winner: "lIty",
    prize: "Зал слави",
    mapPool: "Mirage duel maps",
    description: "Локальний турнір серед гравців команди. Напружені поєдинки, швидкі дуелі та перший великий запис в історії DURMIND.",
    highlights: [
      "Перший великий турнір у хабі DURMIND.",
      "Фінал TUR-9000 vs lIty завершився перемогою lIty.",
      "Формат підходить для швидких вечірніх івентів у Discord."
    ],
    rules: [
      "Матчі проходять у форматі 1 vs 1.",
      "Переможець матчу проходить у наступний раунд.",
      "Фінальний результат фіксується після підтвердження учасниками."
    ],
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
          { p1: "lIty", p2: "Ger4eek", score: "1 : 0", winner: "lIty" },
          { p1: "TUR-9000", p2: "Mental", score: "1 : 0", winner: "TUR-9000" }
        ]
      },
      {
        round: "Final",
        matches: [
          { p1: "TUR-9000", p2: "lIty", score: "0 : 1", winner: "lIty" }
        ]
      }
    ]
  }
];
