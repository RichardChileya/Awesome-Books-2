class Storage {
  static getBook() {
    let cabinet;
    if (localStorage.getItem('books list') !== null) {
      cabinet = JSON.parse(localStorage.getItem('books list'));
    } else {
      cabinet = [];
    }
    return cabinet;
  }

  static updateBook(book) {
    const cabinet = Storage.getBook();
    cabinet.push(book);
    localStorage.setItem('books list', JSON.stringify(cabinet));
  }
}

export default Storage;