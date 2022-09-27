const singlePage = (page) => {
  document.querySelectorAll('section.content').forEach((page) => {
    page.style.display = 'none';
  });

  document.querySelector(`#${page}`).style.display = 'block';
};

export default singlePage;