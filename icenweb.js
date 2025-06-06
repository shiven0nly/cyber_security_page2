document.addEventListener('DOMContentLoaded', function () {
    var btnDemo = document.querySelector('.btn-demo');
    if (btnDemo) {
        btnDemo.addEventListener('click', function () {
            window.open('icenlogin.html');
        });
    }
});



document.getElementById('email').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('password').focus();
    }
});

document.getElementById('signin').addEventListener('click', function() {
    alert('Sign in Successful!');
    window.location.href = 'icenweb2.html';
});

document.addEventListener('DOMContentLoaded', function () {
    var signin = document.querySelector('.btn-demo');
    if (signin) {
        signin.addEventListener('click', function () {
            window.open('icenweb2.html');
        });
    }
});