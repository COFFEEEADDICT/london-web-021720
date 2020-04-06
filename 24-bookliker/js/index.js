const currentUser = { id: 1, username: "pouros" };

// API URLS
const BOOKS_URL = "http://localhost:3000/books";

// API FUNCTONS
const getBooks = () => fetch(BOOKS_URL).then((response) => response.json());

const patchBook = (book) =>
  fetch(`${BOOKS_URL}/${book.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  }).then((response) => response.json());

const postBook = (book) =>
  fetch(BOOKS_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  }).then((response) => response.json());

// DOM ELEMENTS
const bookList = document.querySelector("#list");
const showPanel = document.querySelector("#show-panel");
const newBookForm = document.querySelector("form");

// DOM FUNCTIONS

const renderBooks = (books) => {
  books.forEach((book) => renderBookListItem(book));
};

const renderBookListItem = (book) => {
  const bookLi = document.createElement("li");

  bookLi.innerText = book.title;

  bookLi.addEventListener("click", () => {
    renderBookDetails(book);
  });

  bookList.append(bookLi);
};

const createUserList = (users) => {
  const list = document.createElement("ul");

  users.forEach((user) => {
    const li = document.createElement("li");

    li.innerText = user.username;

    list.append(li);
  });

  return list;
};

const renderBookDetails = (book) => {
  const bookTitle = document.createElement("h1");

  bookTitle.innerText = book.title;

  const bookThumb = document.createElement("img");

  bookThumb.src = book.img_url;

  const bookDescription = document.createElement("p");

  bookDescription.innerText = book.description;

  const userList = createUserList(book.users);

  const readBookButton = document.createElement("button");

  console.log(book.users, currentUser);
  readBookButton.innerText = book.users
    .map((u) => u.id)
    .includes(currentUser.id)
    ? "UNREAD THIS BOOK"
    : "READ THI?S BOOK";

  readBookButton.addEventListener("click", () => {
    if (book.users.map((u) => u.id).includes(currentUser.id)) {
      book.users = book.users.filter((u) => u.id !== currentUser.id);
    } else {
      book.users.push(currentUser);
    }

    patchBook(book).then((newBook) => {
      const newUserList = createUserList(newBook.users);
      const userList = showPanel.querySelector("ul");

      showPanel.replaceChild(newUserList, userList);

      readBookButton.innerText = newBook.users
        .map((u) => u.id)
        .includes(currentUser.id)
        ? "UNREAD THIS BOOK"
        : "READ THI?S BOOK";
    });
  });

  showPanel.innerHTML = "";
  showPanel.append(
    bookTitle,
    bookThumb,
    bookDescription,
    userList,
    readBookButton
  );
};

getBooks().then((books) => renderBooks(books));

newBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newBookObject = {
    title: event.target.title.value,
    description: event.target.description.value,
    img_url: event.target.img_url.value,
    users: [],
  };

  event.target.reset();

  postBook(newBookObject).then((newBook) => renderBookListItem(newBook));
});
