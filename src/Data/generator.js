const getSentence = require("./getSentence").default;
const LCG = require("./LCG").default;
const fs = require("fs");

let rand = LCG(123); //rand()
let now = 1558000000; // 05/16/2019 @ 9:46am (UTC)
const HOUR = 3600;
const DAY = 24 * HOUR;

let data = {
  conversations: [
    { id: 1, name: "Manuela Himmel" },
    { id: 2, name: "Marcel Bach" },
    { id: 3, name: "Andreas Möller" },
    { id: 4, name: "Jan Vogel" },
    { id: 5, name: "Ralf Herz" },
    { id: 6, name: "Mike Fisher" },
    { id: 7, name: "Frank Sommer" },
    { id: 8, name: "Kristian Vogler" },
    { id: 9, name: "Katharina Lowe" },
    { id: 10, name: "Marina Scherer" },
    { id: 11, name: "Sophie Blau" },
    { id: 12, name: "Bernd Konig" },
    { id: 13, name: "Sebastian Wirtz" },
    { id: 14, name: "Max Kuester" },
    { id: 15, name: "Daniel Herrmann" },
    { id: 16, name: "Nicole Grunwald" },
    { id: 17, name: "Daniela Lehrer" },
    { id: 18, name: "Petra Holtzmann" },
    { id: 19, name: "Monika Nussbaum" },
    { id: 20, name: "Luca Urner" }
  ]
};

let newConversations = {};
newConversations.conversations = data.conversations.map(conversation => {
  let newItem = { ...conversation };

  let length = 3 + Math.floor(rand() * 7) * Math.floor(rand() * 3);

  let timestamp = now - Math.floor(rand() * 90 * DAY); // max minus 90 days

  // generate timestamps
  let timestamps = Array.from({ length: length }, (_, i) => {
    timestamp =
      timestamp -
      Math.floor(rand() * 7 * HOUR) +
      Math.floor(rand() * 3 * HOUR);
    return timestamp;
  }).sort();


  let newConversation = Array.from({ length: length }, (_, i) => {


    return {
      id: conversation.id * 1000 + i,
      type: "text",
      from: rand() > 0.5 ? "me" : conversation.id,
      text: getSentence(() => rand()),
      date: timestamps[i] // parseInt(new Date().getTime() / 1000)
    };
  });
  // console.log("conversation", newConversation);
  newItem.conversation = newConversation;

  return newItem;
});

fs.writeFileSync("./index.json", JSON.stringify(newConversations, null, 2));
