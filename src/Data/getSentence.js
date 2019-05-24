Object.defineProperty(exports, "__esModule", {
  value: true
});

// https://github.com/davidak/satzgenerator
// merci https://www.stephanl.de/satz

var Subject1 = [
  "Dein Bein",
  "Dein Bauch",
  "Dein Kopf",
  "Dein Fuss",
  "Dein grosser Zeh",
  "Dein Arm",
  "Die Weltwirtschaftskrise",
  "Dein Daumen",
  "Dein Haar",
  "Dein Gesicht",
  "Ein Witz von dir",
  "Dein Geist",
  "Dein Gehirn",
  "Deine Orientierungsgabe",
  "Nichts",
  "Ein Schüleraustausch",
  "Dich zu sehen",
  "Deine Menschenkenntnis",
  "1 Złoty"
];
var Subject2 = [
  "Enzos Fuss",
  "eine Banane",
  "der Inhalt von Frau Renners Kopf",
  "alle Religionen zusammen",
  "einer von vielen Kommentaren auf YouTube",
  "alle Nachrichten auf Twitter zusammen",
  "eine Gurke",
  "deine Mutter",
  "der Internet Explorer",
  "die Verspätung der Deutschen Bahn",
  "die total echten Freundschaften auf Facebook",
  "ein Katzenvideo auf YouTube",
  "die Dauer des Streiks des DHL",
  "der Sinn des Lebens",
  "Nachts am Bahnhof auf den Zug zu warten",
  "12h Busfahrt",
  "die Dunkelheit"
];
var namen = [
  "Urs",
  "Julian",
  "Marvin",
  "Hung",
  "David",
  "Erik",
  "Herr Paulus",
  "Herr Strobel",
  "Jasiek",
  "Kamil",
  "Deine Mutter",
  "Deine Zimmerpflanze"
];
var couppler = [
  "der geilste im Dorf",
  "der, der die Witze von Herr Strobel immer als erster versteht",
  "in dich verliebt",
  "ein heimlicher Stalker",
  "ein grosser Fan von DagiBee",
  "ein verdammt guter Programmierer",
  "ein Experte für heikele Lebensfragen",
  "der neue Kevin",
  "Eiskunstläufer (Männlich und sexy zugleich)"
];
let sentence = rnd => {
  let rand = rnd || (() => Math.random());
  var randomNr = Math.floor(rand() * 3);
  if (randomNr === 1) {
    return (
      Subject1[Math.floor(rand() * Subject1.length)] +
      " ist wie " +
      Subject2[Math.floor(rand() * Subject2.length)] +
      "."
    );
  } else {
    return (
      namen[Math.floor(rand() * namen.length)] +
      " ist " +
      couppler[Math.floor(rand() * couppler.length)] +
      "."
    );
  }
};

// export let getSentence = sentence;
exports.default = sentence;
