const link = document.querySelector("a");
link.addEventListener("click", event => {
  event.preventDefault();
  console.log(event);
  console.log("link has been clicked");
});

const keyDisplay = document.querySelector("#key");

document.addEventListener("keydown", event => {
  console.log("keydown has fired", event.key);

  keyDisplay.innerText = `Key pressed: ${event.key}`;
});

const mouseDisplay = document.querySelector("#mousePos");

document.addEventListener("mousemove", event => {
  mouseDisplay.innerText = `Mouse pos x: ${event.x}, y ${event.y}`;
});

// document.addEventListener("mouseover", event => {
//   console.log("mouse is over something", event.target);
//   event.target.style.background = "fuchsia";
// });

// EVENTS
// BUBBLE
// UP

const buttonsInLis = document.querySelectorAll("li button.delete");

// buttonsInLis.forEach(button => {
//   button.addEventListener("click", () => {
//     console.log("delte this list item");
//     button.parentElement.remove();
//   });
// });

const list = document.querySelector("ul");

list.addEventListener("click", event => {
  console.log("clicked on a thing");
  if (event.target.className === "delete") {
    event.target.parentElement.remove();
  }
});

// document.addEventListener("click", event => {
//     if (event.target.className === "delete" && event.target.parent === list) {

//     }
//     if (EventTarget./targ === delete ** event.tateerget/parent === "some other thing" {

//     })
//     ifct
// })

const addToList = text => {
  const listItem = document.createElement("li");
  listItem.innerText = text;
  list.append(listItem);
};

const newNoiseButton = document.querySelector("li:last-child button");
const newNoiseInput = document.querySelector("input");

newNoiseButton.addEventListener("click", () => {
  addToList(newNoiseInput.value);
  newNoiseInput.value = "";
});

const form = document.querySelector("form");

form.addEventListener("submit", event => {
  const userObject = {
    firstname: form.firstname.value,
    lastname: form.lastname.value,
    middlename: form.middlename.value,
    nickname: form.nickname.value
  };
  console.log("form submitted", userObject);
  event.preventDefault();
});

const values = {
  counter: 0,
  likes: 0
};
const counter = document.querySelector("#counter");
const renderCounter = () => {
  counter.innerText = values.counter;
};
const likes = document.querySelector("#likes");
likes.addEventListener("click", () => {
  values.likes++;
  likes.innerText = values.likes;
});

setInterval(() => {
  values.counter++;
  renderCounter();
}, 1000);
