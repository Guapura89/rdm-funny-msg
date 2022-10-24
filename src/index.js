const messages = [
  "Hello my friend",
  "De chill !!!",
  "John putillo",
  "Saca el 12",
  "I love LOL",
  "Jaimitoooo",
  "Si ya jala no le muevas",
  "This is not the commit message you are looking for",
  "Batman! (this commit has no parents)",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
};

module.exports = {
  funnyCommit,
};
