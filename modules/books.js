class BookClass {
  constructor(id, title, author) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  addBook() {
    this.book = { id: this.id, title: this.title, author: this.author };
    this.bookList.push(this.book);
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }

  removeBook() {
    this.bookList = this.bookList.filter((books) => books.id !== this.id);
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }
}

export default BookClass;