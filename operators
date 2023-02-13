// Array destructuring
// we are working the restaurant object

const restaurant = {
  name: "Eddies pizza",
  location: "Accra, Lapaz",
  categories: ["Italiano", "Pizzaria", "Vegetarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //weekdays :['mon', 'tue', 'wed', 'thur', 'fri'],

  order: function (startMenIndex, mainMenIndex) {
    return [this.startMenu[startMenIndex], this.mainMenu[mainMenIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//destructuring of an object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// renaming the propreties of an  object

const { name: restoname, openingHours: hours, categories: catego } = restaurant;
console.log(restoname, hours, catego);

//init the properties

/* const { menu = [], startMenu: starter = [] } = restaurant;
console.log(menu, starter);

// mutating variable
let a = 115; 
let v = 155;
let c = 11;
const obj = { a: 34, v: 67, c: 777 };
({ a, v } = obj);
console.log(a, v); 
 */

// Nested array




// changing the element of the arr directly with destructuring
const arr = [2, 3, 4,];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);


// switching var
let [main, second] = restaurant.categories
console.log(main, second);

[main, second] = [second, main]
console.log(main, second);

const [ingrid1, ingrid2] = (restaurant.order(0, 1));
console.log(ingrid1, ingrid2);

// nested destructuring
 const nested = [1, 2, [3, 6]];
const [s, , [j, m]] = nested;
console.log(s, j, m);

//default values

const [p, w, l = 1] = [2, 6];
console.log(p, w, l);

// looping with arrays

//the for of LOOPS buils to only give the current elements(best case)

const menu = [...restaurant.startMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// get the element and the index with .entrie() methode
for (const [i, elet] of menu.entries()) {
  console.log(`${i + 1} : ${elet}`);
}

// optional chaining on property check if a property exist, if not it return undefined

// without chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with chaining , we put the ? before the property we're checking for
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.fri.open);

// we pass the element of the arrays to the property
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat"];

for (const jour of weekdays) {
  //console.log(jour);
  const open = restaurant.openingHours[jour]?.open ?? "closed";
  console.log(`we are open on ${jour} at ${open} `);
}

// optional method check if a method exist after we call it , we put ? after the methods NB: do not forget the bracket

console.log(restaurant.bonus?.() ?? "Does not exist");

// on arrays

console.log(restaurant[0]?.name ?? "name");

// set

const oderSet = new Set([
  "Italiano",
  "Pizzaria",
  "Vegetarian",
  "Organic",
  "Pizza",
  "Pasta",
  "Risotto",
]);

console.log(oderSet); // log a set
console.log(oderSet.size); // the length
console.log(oderSet.has("Pasta")); // check if a element exist which is the same as the include methode in arrays
oderSet.add("Garlic Bread");
oderSet.add("Garlic Bread");
oderSet.delete("Pasta");
console.log(oderSet);

// best use case of a set is to reduce the duplicate in a  array so all element become unique

const staff = ["Waiter", "Waiter", "chef", "chef", "Manager"];
const uniqueArray = [...new Set(staff)];
console.log(uniqueArray);

//                  MAPS
const rest = new Map();
rest.set("name", "Classical resto"); // set methode add a new element to a set

console.log(rest.set("menu", ["beef", "fish", "organic"]));
rest.set(4, "number of branches");

console.log(rest.get("name"));
console.log(rest.get(4));

// convert a object to a map
// const newMap = new Map(Object.entries(restaurant));
// console.log(newMap);

const question = new Map([
  ['question', 'who is the best player in the world?'],
  [1, 'CR7'],
  [2, 'Messi'],
  [3, 'Neymar'],
  ['correct', 1],
  [true, 'correct !!!'],
  [false, 'try again'],
]);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}// logging to the value with key number only


//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));// this evaluate the equation to true and then passing it along to get the value for the boolean true, as well as false

// convert map to an array

console.log(...question);



// Where data can come from??
// 1 - the programme itself: status Message
// 2 - From the UI: input from user, eg: task in todo app
// 3- web API : REceive object



// working with strings

const names = "juAus Tofi";
correname = names.toLowerCase();
console.log(names[0].toUpperCase() + correname.slice(1));

// comparing emails

const email = 'jula@map.io'
const wrongEmail = ' JulA@mAP.io'
const normalisedEmail = wrongEmail.toLowerCase().trim()
console.log(email === normalisedEmail);
//replacing the element of a string
console.log(email.replace('a', 'i'));
console.log(names.replace('Tofi', 'ameg'));
 
// regex to replace all occurrence of the string done by '''/string/g''''
console.log(email.replace(/a/g, "i"));

// return Booleans fron strings

console.log(names.includes('T'));
console.log(names.includes('t'));
console.log(names.includes('Tofi'));

console.log(names.startsWith('bn'));
if (names.startsWith('ju') && names.endsWith('fi')){
  console.log('is my real name');
}

// check passenger with items ( )

const checkPass = function (item) {
  const checkItem = item.toLowerCase();
  if (checkItem.includes('gun' || 'knife')) console.log('you are not welcome aboard');
  else {
    console.log('you are welcone on board');
  }
}

checkPass('i have a Gun ans knife')
checkPass('i have a gun and juice')
checkPass('i have some snacks and a baby')

// split and join

console.log('i/not/what/you/think'.split('/'));


const [firstName, lastName] = names.split(' ');
//join them by putting them into an array
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalName = function (nom) { //'messi rona'
  namSplit = nom.split(' ');
  nameArray = [];
  for (const n of namSplit) {
    
   //nameArray.push(n[0].toUpperCase() + n.slice(1));
    //or: by using the replace methode
    nameArray.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameArray.join(' '));
};
capitalName('isaac newton');
capitalName('gold hith');
capitalName('just capitalise the first letter');

// Padding a string is to add a desired string to the actual string to the length wanted at the beginnig or at the end

const message = 'study CS at the university of '
console.log(message.length);
console.log(message.padStart('35', 'kofi '));
console.log(message.padEnd('34', 'gtcu'));


//slice methode cut a string up to the index given and can start at end to with a negative(-index) index
console.log('theosdlsdk'.slice(-4));

const cardNum = function (digits) {
  strDigit = digits + ''; // or string() to convert to string
  const latDigit = strDigit.slice(-4);
  return(latDigit.padStart(strDigit.length, '*'))
}
console.log(cardNum(1256438));
console.log(cardNum(125643895894622354152n));// n is for big int
console.log(cardNum('8548693021254'));

// Repeat a str
const messageForplane = 'bad weather...kindly wait!!! ';
console.log(messageForplane.repeat(5));


// string exercise

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getFormat = (str) => str.slice(0, 3).toUpperCase();
const flightMsg = flights.split('+');
for (const flight of flightMsg) {
  //console.log(flight);
  const [depart, from, to, time] = flight.split(';');
  const output = `${depart.startsWith('_Delayed') ? '🔴' : ''}${depart.replace(/_/g, ' ')} ${getFormat(from)} ${getFormat(to)} (${time.replace(':', 'h')})`.padStart(40);
  console.log(output);
}

