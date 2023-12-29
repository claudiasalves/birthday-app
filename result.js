document.addEventListener('DOMContentLoaded', () => {
  // Retrieve the user name from local storage
  const userName = localStorage.getItem('userName');
  console.log('Name retrieved ' + userName)

  // Clear the user name from local storage (optional)
  // localStorage.removeItem('userName');

  // Example: Display a result message with the user name
  // document.createElement('p')
  const resultMessage = document.getElementById('resultMessage');
  resultMessage.textContent = `Happy Birthday, ${userName}!`
})