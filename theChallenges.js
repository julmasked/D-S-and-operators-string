const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1; //rest operators
console.log(gk, fieldPlayers);

const allPlayers = [...player1, ...player2]; // two arrays bind
console.log(allPlayers);

const players2Final = [...player1, "Thiago", "Couthino", "Perisic"]; // creating a new array out of a full array and additonal variables
console.log(players2Final);

const {
  odds: { team1, x: draw, team2 },
} = game; // nested destruct
console.log(team1, draw, team2);

const printGoals = function (...Players) {
  console.log(`${Players.length}  goals were scored `);
};
printGoals("Davies", "Kimmich");
console.log(" heabedslafs");

// condition without unary nor conditional statement
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

// looping through an array and printing the index with the entries methode wich takes two argmnt.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// getting the avrg of an object with object.value

const odds = Object.values(game.odds);
let avrg = 0;
for (const odd of odds) avrg += odd;
avrg /= odds.length;
console.log(avrg);

//
const aud = Object.values(game.odds); // value return only the value of the object
for (const i of aud) {
  i == 1.33 && console.log(`Odd of victory ${game.team1}: ${i}`);
  i == 3.25 && console.log(`Odd of draw: ${i}`);
  i == 6.5 && console.log(`Odd of victory ${game.team2}: ${i}`);
}

for (const [oddKey, oddValue] of Object.entries(game.odds)) {
  //object.entrie on object return a value and a key
  const teamStr = oddKey === "x" ? "draw" : `victory ${game[oddKey]}`; // if the oddkey is the same as 'x' then the result should be the string draw
  console.log(`Odd of ${teamStr}: ${oddKey}`);
}

//CHALLENGE ON MAPS
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);
// iterate through a maps and taking only the values to make a non duplicate array fron them
const events = [...new Set(gameEvents.values())];
console.log(events);

// remove a element from the maps
gameEvents.delete(64);
console.log(gameEvents);

const average = (90 / (gameEvents.size + 1)).toFixed(2);
console.log(`An event happened, on average evry ${average} minutes`);

for (const [key, value] of gameEvents) {
  if (key <= 45) console.log(`[First half ${key} : ${value}]`);
  else console.log(`[Second half- ${key} : ${value}]`);
}

                 // WORKING WITH STRING

  /* Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉 */

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
//a_b c_d e_f g_h == aB cD eF gH

//const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  const sentence = document.querySelector("textarea").value;
  const splitSentence = sentence.split('\n');
  let counter = 1;

  for (const w of splitSentence) {

    const lastSplit = w.trim().split('_')


    const edit = lastSplit[1].toLowerCase();
      const word = lastSplit[0].toLowerCase() +
      edit.replace(edit[0], edit[0].toUpperCase()) ;
    counter += 1;
    console.log(word.padEnd(20) +`${'✅'.repeat(counter)}`);
  }
});

 
