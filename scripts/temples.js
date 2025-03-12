const toggleBtn = document.getElementById('toggleBtn');
const mainNav = document.getElementById('mainNav');

// Toggle navigation menu
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('open');
    mainNav.classList.toggle('open');
});

