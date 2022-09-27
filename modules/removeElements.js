/* Helper function for book removal from DOM */
const removeBook = (pop) => {
  if (pop.classList.contains('remove')) {
    pop.parentElement.parentElement.remove();
  }
};

export default removeBook;