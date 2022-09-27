/* Modules as local dependencies for the Book Tracker App */
import Storage from './modules/storage.js';
import validateForm from './modules/formValidation.js';
import removeBook from './modules/removeElements.js';
import Book from './modules/newObject.js';
/* eslint-disable */
import { writeBook, UI } from './modules/UI_display.js';
/* eslint-enable */
import singlePage from './modules/mainApp.js';
import { DateTime } from './modules/luxon.js';

/* eslint-disable */
const library = document.querySelector('.library');

export default library;
/* eslint-enable */

// Add new || Fetch books to || from Local Storage
document.querySelector('.add').addEventListener('click', (e) => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  /* Prevent Default Behavior */
  e.preventDefault();
  if (title === '' || author === '') {
    validateForm();
    setTimeout(() => {
      document.querySelector('.error-index').textContent = '';
    }, 2000);
  } else {
    /* Create & Add new book */
    const newBook = new Book(title, author);
    writeBook(newBook);
    Storage.updateBook(newBook);
    document.querySelector('.form').reset();
  }
});

/* Display books on the UI */
document.addEventListener('DOMContentLoaded', UI.displayBook);

/* Delete books from UI and Local Storage */
library.addEventListener('click', (e) => {
  removeBook(e.target);
  UI.deleteBook(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
});

/* Implementing Single page Application function */
document.querySelectorAll('.nav-list a').forEach((link) => {
  link.addEventListener('click', (e) => {
    singlePage(e.target.dataset.page);
  });
});

const realTime = () => {
  const td = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.querySelector('.date').textContent = td;
};

document.addEventListener('DOMContentLoaded', () => {
  setInterval(realTime, 1000);
});