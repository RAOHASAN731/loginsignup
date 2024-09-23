  document.addEventListener('DOMContentLoaded', function() {
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginTab.addEventListener('click', function() {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.add('active');``
        signupForm.classList.remove('active');
    });

    signupTab.addEventListener('click', function() {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    document.querySelector('#loginForm form').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // Example validation
        if (username === 'user' && password === 'password') {
            document.getElementById('loginMessage').textContent = 'Login successful!';
            document.getElementById('loginMessage').style.color = 'green';
        } else {
            document.getElementById('loginMessage').textContent = 'Invalid username or password';
        }
    });

    document.querySelector('#signupForm form').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        // Example validation
        if (username && email && password) {
            document.getElementById('signupMessage').textContent = 'Signup successful!';
            document.getElementById('signupMessage').style.color = 'green';
        } else {
            document.getElementById('signupMessage').textContent = 'Please fill out all fields';
        }
    });
});


