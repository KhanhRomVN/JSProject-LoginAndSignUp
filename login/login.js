const loginButton = document.getElementById('login');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

/* API */
const userAPI = 'http://localhost:3000/users';

/* Login Button */
loginButton.addEventListener('click', function() {
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    /* Check Invalid Username Add Password */
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter a username and password.');
        return;
    }
    
    fetch(userAPI)
    /* responsive API */
    .then(response => response.json())
    /* Check User */
    .then(data => {
        const user = data.find(
            user => user.username === username && user.password === password
        );
        if (user) {
            alert(`Welcome, ${username}!`);
            window.location.href = '/index.html';
        } else {
            alert('Invalid username or password.');
        }  
    })
    .catch(error => console.error(error));
});