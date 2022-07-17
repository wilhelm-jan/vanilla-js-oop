class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Headstrong",
        author: "Dave Asprey",
        isbn: "9780062652416",
      },
      {
        title: "Boundless",
        author: "Ben Greenfield",
        isbn: "1628603976",
      },
      {
        title: "Code of the extraordinary mind",
        author: "Vishen Lakhiani",
        isbn: "1623367085",
      },
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  static deleteBook(item) {
    if (item.classList.contains("delete")) {
      item.parentElement.parentElement.remove();
    }
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");

    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.title}</td><td><i class="fa-solid fa-trash delete"></i></td>`;

    list.appendChild(row);
  }
}

document.addEventListener("DOMContentLoaded", UI.displayBooks);
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill in all fields.", "danger");
  } else {
    const book = new Book(title, author, isbn);

    UI.addBookToList(book);
    UI.clearFields();
  }
});

document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
