const myLibrary = [
  {
    title: "Juegos del hambre",
    author: "Jeremih Bomboclaat",
    pages: "495",
    read: "read",
  },

  {
    title: "The Finals",
    author: "Mikel Santiago",
    pages: "326",
    read: "not read",
  },
];

const shelf = document.querySelector(".shelf");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const showButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  console.log(title);
  console.log(author);
  console.log(pages);
  console.log(read);
  dialog.close();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function displayBook() {
  // Loops out myLibrary Object Array

  for (let i = 0; i < myLibrary.length; i++) {
    // Shelf div for the book display
    const shelf = document.querySelector(".shelf");
    let div = document.createElement("div");
    div.classList.add("book");
    shelf.append(div);

    // Book title
    let h1 = document.createElement("h1");
    h1.innerText = myLibrary[i].title;
    div.append(h1);

    // List out book characteristics
    let ul = document.createElement("ul");
    let liAuthor = document.createElement("li");
    let liPages = document.createElement("li");
    let liRead = document.createElement("li");
    liAuthor.innerText = `Author:  ${myLibrary[i].author}`;
    liPages.innerText = `Pages: ${myLibrary[i].pages}`;
    liRead.innerText = `Status:  ${myLibrary[i].read}`;
    ul.append(liAuthor);
    ul.append(liPages);
    ul.append(liRead);
    div.append(ul);
  }
}
function addBookToLibrary() {}
