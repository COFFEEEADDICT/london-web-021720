const toyContainer = document.querySelector("#toy-collection");
const toyLikesFilterButton = document.querySelector("#toy-filter-toggle");

let showOnlyPopular = false;

const getToys = () =>
  fetch("http://localhost:3000/toys").then(response => {
    return response.json();
  });
const patchToy = toy =>
  fetch(`http://localhost:3000/toys/${toy.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(toy)
  }).then(response => {
    return response.json();
  });
const postToy = toy =>
  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(toy)
  }).then(response => {
    return response.json();
  });
const deleteToy = toy =>
  fetch(`http://localhost:3000/toys/${toy.id}`, { method: "DELETE" });

const renderToy = toy => {
  const toyDiv = document.createElement("div");

  toyDiv.className = "card";

  // * `h2` tag with the toy's name
  const h2 = document.createElement("h2");

  h2.innerText = toy.name;

  // * `img` tag with the `src` of the toy's image attribute and the class name "toy-avatar"
  const img = document.createElement("img");

  img.src = toy.image;
  img.className = "toy-avatar";

  // * `p` tag with how many likes that toy has
  const p = document.createElement("p");

  p.innerText = `Likes: ${toy.likes}`;

  const deleteButton = document.createElement("button");

  deleteButton.className = "like-btn";
  deleteButton.innerText = "X";

  deleteButton.addEventListener("click", () => {
    // delete request
    deleteToy(toy).then(() => {
      toyDiv.remove();
    });
    // then remove el
  });

  // * `button` tag with a class "like-btn"
  const button = document.createElement("button");

  button.className = "like-btn";
  button.innerText = "Like >3";

  button.addEventListener("click", () => {
    console.log("like this toy", toy);

    toy.likes++;
    button.disabled = true;

    patchToy(toy).then(updatedToy => {
      toy.likes = updatedToy.likes;

      p.innerText = `Likes: ${toy.likes}`;
      button.disabled = false;
    });
  });

  toyDiv.append(h2, img, p, deleteButton, button);

  toyContainer.append(toyDiv);
};

getToys().then(toys => {
  toys.forEach(toy => renderToy(toy));

  toyLikesFilterButton.addEventListener("click", () => {
    showOnlyPopular = !showOnlyPopular;

    toyLikesFilterButton.innerText = showOnlyPopular
      ? "Show all"
      : "Only popular toys";

    let toysToRender;
    if (showOnlyPopular) {
      toysToRender = toys.filter(toy => toy.likes >= 10);
    } else {
      toysToRender = toys;
    }

    toyContainer.innerText = "";
    toysToRender.forEach(toy => renderToy(toy));
  });
});

const newToyForm = document.querySelector(".add-toy-form");

console.log(newToyForm);
newToyForm.addEventListener("submit", event => {
  event.preventDefault();

  const newToy = {
    name: newToyForm.name.value,
    image: newToyForm.image.value,
    likes: 0
  };

  postToy(newToy).then(newToyFromServer => {
    renderToy(newToyFromServer);
  });
});

newToyForm.addEventListener("reset", event => {
  event.preventDefault();
});
