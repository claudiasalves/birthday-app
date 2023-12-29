document.addEventListener('DOMContentLoaded', () => {

  const userName = localStorage.getItem('userName');
  const dateofBirth = localStorage.getItem('dateOfBirth')

  const resultName = document.getElementById('resultName');
  resultName.textContent = `Happy Birthday, ${userName}!`

  const resultDOB = document.getElementById('resultDOB');
  resultDOB.textContent = `Your birthday is ${dateofBirth}!`
})