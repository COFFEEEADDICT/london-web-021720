const dinos = [
  {
    type: "T Rex",
    color: "brown",
    age_in_millions: 8 / 12,
    favouriteFoods: ["humans", "goats"],
  },
  {
    type: "Velociraptor",
    color: "green",
    age_in_millions: 2,
    favouriteFoods: ["cats", "bats"],
  },
  {
    type: "Triceratops",
    color: "brown",
    age_in_millions: 2,
    favouriteFoods: ["some weird thai sausage type thing", "courgettes"],
  },
  {
    type: "Diplodocchus",
    color: "grey",
    age_in_millions: 2,
    favouriteFoods: ["avocado", "scrambled egg"],
  },
];

// destructuring

// arrays

const firstEl = dinos[0];
const secondEl = dinos[1];

const [first, second] = dinos;

const [, ...remainingDinos] = dinos;

// const [counter, setCounter] = useState(0);

// setCounter(5);

// objects

const dino1 = dinos[0];
const { name, imgiurl, age_in_millions, color } = dinos[0];
// const name = dinos[0].name;
// const imgiurl = dinos[0].imgiurl;

name;
imgiurl;
age_in_millions;
color;

const renderDinoCard = ({ name, imgiurl, age_in_millions, color }) => {
  name;
  imgiurl;
  age_in_millions;
  color;
};

// key value assignment shortcut

const username = "sam";
const password = "SAM";
const email = "sam@sam.com";

const gergerge = {
  username: username,
  password: password,
  email: email,
};

const userObject = {
  username,
  password,
  email,
};

// form.addEventListener("submit", (event) => {
//   const {
//     target: { username: usernameField },
//   } = event;
//   // const { username: usernameField } = target;
//   const { value: username } = usernameField;

//   const userObject = {
//     username,
//     password,
//     email,
//   };
// });

// QUESTIONS

// dynamic object keys

const key = "name";
const dyn = "hi";

dino1[key];

const obj = {
  [key]: dyn,
};

// ES6 Spread Operator

let dinoObject = {};

const updateDinoObject = (currentDinoObject, key, value) => {
  return {
    ...currentDinoObject,
    [key]: value,
  };
};

// form.addEventListener("input", (event) => {
//   dinoObject = updateDinoObject(
//     dinoObject,
//     event.target.name,
//     event.target.value
//   );
// });

const args = ["hello", "world"];

const logGreeting = (greeting, name) => {
  console.log(greeting, name);
};

logGreeting(args[0], args[1]);
logGreeting("hi", args[1]);
logGreeting(...args);
logGreeting("hello", "world");

const cloneArgs = [...args];
const push = [...args, "goodbye"];

// arrow functions

const myFunc = (arg) => arg * arg;
const myFunc2 = (arg, anotherArg) => arg * anotherArg;
const myFunc3 = (arg, anotherArg) => {
  return arg * anotherArg;
};

// callbacks

dinos.forEach((dino) => console.log(dino.name));

const forEach = (array, callback) => {
  for (const element of array) {
    callback(element, array.indexOf(element));
  }
};

forEach(dinos, (dino) => console.log(dino.name));

const map = (array, callback) => {
  const newArray = [];

  for (const element of array) {
    newArray.push(callback(element, array.indexOf(element)));
  }

  return newArray;
};

// QUESTIONS

// iterators

// HOF - higher order functions

// forEach;

// map;

// filter;

// find;
// reduce;

// QUESTIONS

// currying and partial application

const createMultiplier = (multiplier) => {
  return (number) => number * multiplier;
};

createMultiplier(5)(10);

const timesFive = createMultiplier(5);

timesFive(10);

const dinoClickHandler = (dino) => {
  return (event) => {};
};

dinos.forEach((dinoElement) => {
  dinoElement.addEventListener("click", dinoClickHandler(dino));
});

// QUESTIONS

// classes
