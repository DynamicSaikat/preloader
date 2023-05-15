window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide-preloader');
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 500);

});