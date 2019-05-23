const getSentence = require("./getSentence").default;
const LCG = require("./LCG").default;
const fs = require("fs");

let rand = LCG(123);
//rand()

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

  let length = Math.floor(rand() * 7) * Math.floor(rand() * 3);
  let newConversation = Array.from({ length: 3 + length }, (_, i) => {
    return {
      type: "text",
      from: rand() > 0.5 ? "me" : conversation.id,
      text: getSentence(() => rand())
    };
  });
  // console.log("conversation", newConversation);
  newItem.conversation = newConversation;

  return newItem;
});

fs.writeFileSync("./index.json", JSON.stringify(newConversations, null, 2));
