/* eslint-disable */
import library from '../index.js';
import Storage from './storage.js';

/* Display books */
const writeBook = (book) => {
  library.innerHTML += `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>
        <button type="button" class="remove">Remove</button>
      </td>
    </tr>
  `;
};

class UI {
  static displayBook = () => {
    const cabinet = Storage.getBook();
    cabinet.map(writeBook).join('');
  };

  /* Delete book */
  static deleteBook = (title) => {
    const cabinet = Storage.getBook();
    cabinet.forEach((book, index) => {
      if (book.title === title) {
        cabinet.splice(index, 1);
      }
    });
    localStorage.setItem('books list', JSON.stringify(cabinet));
  };
}

export { writeBook, UI };