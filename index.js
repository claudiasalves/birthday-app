
document.getElementById('birthdayForm').addEventListener('submit', (event) => {

  event.preventDefault(); 

  const name = document.getElementById('name').value;
  console.log('name saved ', name)

  // const birthday = document.getElementById('birthday').value;

  localStorage.setItem('userName', name);
  // localStorage.setItem('dateOfBirth', birthday);
  
  window.location.href = 'result.html'

});
