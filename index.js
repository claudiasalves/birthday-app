function handleFormSubmit(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const birthday = document.getElementById('birthday').value;
  const nameError = document.getElementById('nameError');
  const birthdayError = document.getElementById('birthdayError');
  const loadingSpinner = document.getElementById('loadingSpinner');
  loadingSpinner.classList.remove('hidden');

  nameError.textContent = '';
  birthdayError.textContent = '';

  if (!name) {
    nameError.textContent = 'Please enter your name.';
    return;
  }

  if (!birthday) {
    birthdayError.textContent = 'Please enter your birthday.';
    return;
  }
  
  localStorage.setItem('userName', name);
  localStorage.setItem('dateOfBirth', birthday);
  
  const todaysDate = new Date();
  const userBirthday = new Date(birthday);
  let nextBirthday = new Date(todaysDate.getFullYear(), userBirthday.getMonth(), userBirthday.getDate());

  if (
    nextBirthday.getMonth() === todaysDate.getMonth() &&
    nextBirthday.getDate() === todaysDate.getDate()
  ) {
    window.location.href = 'bday.html';
  } else {
    window.location.href = 'result.html';
  }
};

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('birthdayForm').addEventListener('submit', handleFormSubmit);
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { handleFormSubmit };
}
