document.getElementById('birthdayForm').addEventListener('submit', (event) => {
  event.preventDefault(); 

  const name = document.getElementById('name').value;

  const birthday = document.getElementById('birthday').value;

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
});
