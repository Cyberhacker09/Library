let bookList = [
    {
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      isbn: "0345391802",
      image: "https://stuffjeffreads.wordpress.com/wp-content/uploads/2014/12/hitchhikersguide.jpg?w=584",
      link: "https://www.deyeshigh.co.uk/downloads/literacy/world_book_day/the_hitchhiker_s_guide_to_the_galaxy.pdf" // Add a link
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "0061120081",
      image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
      link: "https://www.raio.org/TKMFullText.pdf" // Add a link
    }
   
  ];

  function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;
    let image = document.getElementById("image").value; // Get the image URL
    let link = document.getElementById("link").value; // Get the book link

    let book = {
      title: title,
      author: author,
      isbn: isbn,
      image: image,
      link: link
    };

    bookList.push(book);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
    document.getElementById("image").value = ""; // Clear image input
    document.getElementById("link").value = ""; // Clear the link input

    updateBookList();
  }

  function updateBookList(filteredBooks = bookList) {
    let tableBody = document.getElementById("book-table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    filteredBooks.forEach((book, index) => {
      let row = tableBody.insertRow();

      // Image cell
      let imageCell = row.insertCell();
      if (book.image) {
        imageCell.innerHTML = `<img src="${book.image}" class="book-image" alt="${book.title} cover">`;
      } else {
        imageCell.innerHTML = "No Image";
      }

      let titleCell = row.insertCell();
      let authorCell = row.insertCell();
      let isbnCell = row.insertCell();
      let actionsCell = row.insertCell();

      titleCell.innerHTML = book.title;
      authorCell.innerHTML = book.author;
      isbnCell.innerHTML = book.isbn;

      // Add the link to the cell if it exists
      if (book.link) {
        actionsCell.innerHTML =
          `<div class="dropdown">
            <button class="dropbtn">Actions</button>
            <div class="dropdown-content">
              <a href="${book.link}" target="_blank">View Book</a>
              <a onclick="deleteBook(this)">Delete</a>
            </div>
          </div>`;
      } else {
        actionsCell.innerHTML =
          `<div class="dropdown">
            <button class="dropbtn">Actions</button>
            <div class="dropdown-content">
              <a onclick="deleteBook(this)">Delete</a>
            </div>
          </div>`;
      }
    });
  }

  function deleteBook(button) {
    let row = button.parentNode.parentNode.parentNode; // Get the row
    let bookIndex = Array.from(row.parentNode.children).indexOf(row);

    bookList.splice(bookIndex, 1);

    updateBookList();
  }

  function searchBook() {
    let searchTerm = document.getElementById("search-term").value.toLowerCase();
    let filteredBooks = bookList.filter(book => {
      return book.title.toLowerCase().includes(searchTerm) ||
             book.author.toLowerCase().includes(searchTerm) ||
             book.isbn.includes(searchTerm);
    });
    updateBookList(filteredBooks);
  }

  updateBookList();