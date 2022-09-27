const validateForm = () => {
  const para = document.createElement('p');
  para.className = 'error-index';
  para.textContent = 'Please check and fill all fields';
  para.style.color = 'red';
  document.querySelector('.form').prepend(para);
};

export default validateForm;