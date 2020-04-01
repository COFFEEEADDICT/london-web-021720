const waitThen = (time, callback) => {
  const start = Date.now();

  while (start + time > Date.now()) {
    // don't do anything, stuck in a while loop
  }
  callback();
};

const asyncWaitThen = (time, callback) => {
  setTimeout(callback, time);
};

// CALLBACK HELL

// waitThen(5000, () => console.log("hello"));
// console.log("here");
// waitThen(2000, () => console.log("hello"));
// console.log("there");
// waitThen(1000, () => console.log("hello"));
// console.log("everywehrere");

console.log("NOW ASYNc");

asyncWaitThen(5000, () => console.log("hello"));
console.log("here");
asyncWaitThen(2000, () => console.log("hello"));
console.log("there");
asyncWaitThen(1000, () => console.log("hello"));
console.log("everywehrere");

const getDataFromServer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject({ error: "OOPS" });
      } else {
        resolve({ viruses: ["COVID-1", "COVID-2", "COVID-3", "COVID-19"] });
      }
    }, 500 + Math.random() * 1000);
  });
};

// getDataFromServer()
//   .then(data => data.viruses)
//   .then(viruses => viruses.map(virusname => virusname.split("-")[1]))
//   .then(virusNumbers => virusNumbers.map(v => parseInt(v)))
//   .then(virusNumbers => console.log(virusNumbers))
//   .catch(error => console.error(error));

const list = document.querySelector("ul");

const displayTitles = data => {
  data.data.children.forEach(child => {
    const listItem = document.createElement("li");
    listItem.innerText = child.data.title;
    list.append(listItem);
  });
};

const someJson = '{"name": "sergio", "age": 30}';

const button = document.querySelector("button");

const input = document.querySelector("input");

button.addEventListener("click", () => {
  console.log("CLICKED now make request to get subreddit:", input.value);

  //   document.querySelectorAll("ul > li.negative").forEach(listItem => listItem.remove());

  list.innerText = "";

  fetch(`https://www.reddit.com/r/${input.value}.json`)
    .then(response => response.json())
    .then(data => displayTitles(data));
});
