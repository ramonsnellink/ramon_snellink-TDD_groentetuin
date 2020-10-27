const { pickRandomWord, doesWordContainLetter } = require("./script");

// functionaliteit 1, moet "x" kunnen
// schrijf een test die dat controleert
// laat de test falen
// start met het maken van die functionaliteit
// laat de test slagen
// ga door naar functionaliteit 2, maar zorg dat functionaliteit 1 blijft bestaan

//////////////
// Requirements:
// updaten van het aantal pogingen van de gebruiker
// updaten van de lijst met letters die al geraden zijn door de gebruiker
// verliezen van de game wanneer er geen pogingen meer over zijn
// winnen van de game

// starten van de game d.m.v. het kiezen van het woord

// ik wil een game starten, de functie moet een random woord selecteren uit de lijst en dat returnen.

test("Pick a word and start the game. Check if the result has at least 1 character", () => {
  const wordList = ["vis", "toeter", "developer", "telefoon", "moeder", "snoer", "geeuw"];
  expect(pickRandomWord(wordList).length).toBeGreaterThanOrEqual(0);
});

// checken of een letter voorkomt in het woord

test("Check if a word contains a certain letter", () => {
  const inputs = "a";
  const word = ["a", "p", "p", "e", "l"];
  expect(doesWordContainLetter(word, inputs)).toContain(inputs);
});

test("Check if a word DOES NOT contain a certain letter", () => {
  const inputs = "b";
  const word = ["a", "p", "p", "e", "l"];
  expect(doesWordContainLetter(word, inputs)).not.toContain(inputs);
});
