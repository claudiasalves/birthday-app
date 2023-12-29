document.addEventListener('DOMContentLoaded', () => {

  const userName = localStorage.getItem('userName');
  const dateOfBirth = localStorage.getItem('dateOfBirth')

  const resultName = document.getElementById('resultName');
  const resultDOB = document.getElementById('resultDOB');
  const nextbday = document.getElementById('nextbday');

  const todaysDate = new Date();
  const birthday = new Date(dateOfBirth)

  let nextBirthday = new Date(todaysDate.getFullYear(), birthday.getMonth(), birthday.getDate());

  if (todaysDate > nextBirthday) {
    nextBirthday.setFullYear(todaysDate.getFullYear() + 1);
  }

  const daysUntilNextBirthday = Math.ceil((nextBirthday - todaysDate) / (1000 * 60 * 60 * 24));

  resultName.textContent = `Happy Birthday, ${userName}!`;
  resultDOB.textContent = `Your birthday is on ${birthday.toDateString()}`;
  nextbday.textContent= `Days until next birthday: ${daysUntilNextBirthday}`;
})