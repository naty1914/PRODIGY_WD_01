window.addEventListener('scroll', () => {
    const header = document.getElementById('headers');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function showSideBar() {
    const sideBar = document.querySelector('.side-bar');
    sideBar.style.display = 'flex';
}

function hideSideBar() {
    const sideBar = document.querySelector('.side-bar');
    sideBar.style.display = 'none';
}
