
    // Modal open/close logic for "Learn More" button
    document.addEventListener('DOMContentLoaded', function () {
        var modal = document.getElementById('myModal');
        var btn = document.getElementById('learn-more');
        var span = document.querySelector('.closeBtn');

        if (btn && modal && span) {
            btn.onclick = function () {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; 
            };
            span.onclick = function () {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            };
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            };
        }
    });
    document.addEventListener('DOMContentLoaded', function () {
        var modal = document.getElementById('youModal');
        var btn = document.getElementById('write');
        var span = document.querySelector('.closeBtn');

        if (btn && modal && span) {
            btn.onclick = function () {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; 
            };
            span.onclick = function () {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            };
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            };
        }
    });


    // Close modal when any closeBtn is clicked
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('.closeBtn').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    // Find the closest modal ancestor and hide it
                    let modal = btn.closest('.modal, .youmodal');
                    if (modal) {
                        modal.style.display = 'none';
                    }
                });
            });
        });

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('signin').addEventListener('click', function () {
            alert('Sign in Successful!');
            window.location.href = 'icenweb2.html';
        });
    });



    document.addEventListener('DOMContentLoaded', function () {
        var login  = document.querySelector('.btn-demo');
        if (login) { 
            login.addEventListener('click', function () {
                window.open('icenlogin.html');
            });
        }
    });