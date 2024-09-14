
window.addEventListener('scroll', function() {
    if(window.scrollY != 0) {
        document.querySelector('#back-to-top').classList.add('scrolled');
        return;
    }
    document.querySelector('#back-to-top').classList.remove('scrolled');
});