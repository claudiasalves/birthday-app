document.addEventListener('DOMContentLoaded', () => {

  const userName = sessionStorage.getItem('userName');
  const dateOfBirth = sessionStorage.getItem('dateOfBirth');

  const resultName = document.getElementById('resultName');
  const nextbday = document.getElementById('nextbday');

  const todaysDate = new Date();
  const birthday = new Date(dateOfBirth);

  let nextBirthday = new Date(todaysDate.getFullYear(), birthday.getMonth(), birthday.getDate());
  
  if (todaysDate > nextBirthday) {
    nextBirthday.setFullYear(todaysDate.getFullYear() + 1);
  } 

  const daysUntilNextBirthday = Math.ceil((nextBirthday - todaysDate) / (1000 * 60 * 60 * 24));

  resultName.textContent = `Hi ${userName}!`;
  nextbday.textContent = daysUntilNextBirthday;

})