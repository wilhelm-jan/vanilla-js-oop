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

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");

    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.title}</td><td><a href="#" btn btn-danger><i class="fa-solid fa-trash"></i></a></td>`;

    list.appendChild(row);
  }
}

document.addEventListener("DOMContentLoaded", UI.displayBooks);
