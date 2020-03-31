const addToList = text => {
  // find
  const list = document.querySelector("ul");
  // create
  const listItem = document.createElement("li");
  // update
  listItem.innerText = text;

  // add
  list.append(listItem);
};

addToList("third thing");

const doAFewThings = (thing1, thing2, thing3) => {
  console.log("do a few things", thing1, thing2, thing3);
  thing1();
  thing2();
  thing3();
};

const removeAllTheLis = () => {
  const listItems = document.querySelectorAll("li");
  console.log(listItems);

  //   listItems.each do |element|

  //   end
  listItems.forEach(element => element.remove());
  //   listItems.map do |element|

  //   end
  //   const innerTexts = listItems.map(element => element.innerText);
  //   console.log(innerTexts);

  //   listItems.select do |element|

  //   end
  //   listItems.find do |element|

  //   end

  //   for (const element of listItems) {
  //     element.remove();
  //   }
};

doAFewThings(
  () => addToList("four thing"),
  () => removeAllTheLis(),
  () => addToList("fif thing")
);

const startWithSOr0IsHi = element => element[0] === "s" || element[0] === "hi";

const doStuffWithAnArray = array => {
  array.forEach(element => console.log(element));

  const mappedArray = array.map(element => element[0]);
  console.log(mappedArray);

  const filteredArray = array.filter(startWithSOr0IsHi);
  console.log(filteredArray);
};

doStuffWithAnArray(["sam", "sergio", "sergio", "skye"]);
doStuffWithAnArray([124, 543, 4]);
doStuffWithAnArray([
  { name: "ferfs", 0: "hi" },
  { name: "kilkij", 0: "bye" }
]);

const forEach = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    callback(element, index);
  }
};

forEach([1, 2, 4, 6, 8, 9], (num, i) => console.log("callback called", num, i));
const numbers = [1, 2, 4, 6, 8, 9];

// numbers.forEach = (array, callback) => {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     callback(element, index);
//   }
// };

numbers.forEach((num, i) => console.log("callback called", num, i));
