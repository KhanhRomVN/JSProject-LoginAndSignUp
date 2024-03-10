const signupButton = document.getElementById('signup');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

var userId; 

const userAPI = 'http://localhost:3000/users';

fetch(userAPI)
  .then(response => response.json())
  .then(data => {
    userId = data.length + 1;
  })
  .catch(error => console.error(error));

signupButton.addEventListener('click', function() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  const id = userId;
  if (username.trim() === '' || password.trim() === '') {
    alert('Please enter a username and password.');
    return;
  }

  const newUser = { id, username, password };

  fetch(userAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then(response => response.json())
    .catch(function(error) {
      console.error('Error:', error);
    });
});