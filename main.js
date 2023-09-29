let titleBage = document.getElementById("titleBage");
setTimeout(() => {
  titleBage.style.display = "none";
}, 1000);
let books = [
  {
    title: "book",
    author: "John Doe",
    image: "image/PO-First-1612-1[4].jpg",
  },
  {
    title: "book",
    author: "Ismail",
    image: "image/تنزيل.jpeg",
  },
  {
    title: "book",
    author: "Hamdan",
    image: "image/images.jpeg",
  },
];
let count = 3;
for (let i = 0; i < count; i++) {
  let container = document.getElementById("container" + (i + 1));

  let bookData = books[i];

  let heading = document.createElement("h4");
  heading.className = "heading";
  heading.textContent = "Title: " + bookData.title;

  let paragraph = document.createElement("p");
  paragraph.textContent = "Author: " + bookData.author;
  paragraph.className = "pargraph";

  let image = document.createElement("img");
  image.src = bookData.image;
  image.className = "image";

  container.appendChild(image);
  container.appendChild(heading);
  container.appendChild(paragraph);
}

let button = document.getElementById("button");
let card = document.getElementById("card");

// oncklick button to add card

let titleNewBook = document.getElementById("titleNewBook");
let authorNewBook = document.getElementById("authorNewBook");
let imageNewBook = document.getElementById("imageNewBook");
let buttonsave = document.getElementById("save");
let newBook = document.getElementById("newBook");
button.onclick = function () {
   newBook.style.display = "block";
};
buttonsave.onclick = function () {
  let newbooks = {
    title: titleNewBook.value,
    author: authorNewBook.value,
    image: imageNewBook.value,
  };
  let loopNewBook = 4;
  for (let i = 4; i <= loopNewBook; i++) {
    let heading = document.createElement("h4");
    heading.className = "heading";
    heading.textContent = "Title: " + newbooks.title;

    let paragraph = document.createElement("p");
    paragraph.textContent = "Author: " + newbooks.author;
    paragraph.className = "pargraph";

    let image = document.createElement("img");
    image.src = newbooks.image;
    image.className = "image";

    let divCard = document.createElement("div");
    divCard.className = "a";
    divCard.id = "container" + i;
    card.append(divCard);
    divCard.appendChild(image);
    divCard.appendChild(heading);
    divCard.appendChild(paragraph);
  }
  clear();
   newBook.style.display = "none";
};
//  clear value new book
function clear() {
  titleNewBook.value = "";
  authorNewBook.value = "";
  imageNewBook.value = "";
}
