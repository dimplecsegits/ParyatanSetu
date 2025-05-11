// Toggle active state for search options
document.querySelectorAll('.search-options button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.search-options button.active').classList.remove('active');
        button.classList.add('active');
    });
});

// Dark mode toggle
document.querySelector('.accessibility button:nth-child(3)').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Font size controls
document.querySelector('.accessibility button:nth-child(1)').addEventListener('click', () => {
    document.body.style.fontSize = parseInt(getComputedStyle(document.body).fontSize) + 1 + 'px';
});

document.querySelector('.accessibility button:nth-child(2)').addEventListener('click', () => {
    document.body.style.fontSize = parseInt(getComputedStyle(document.body).fontSize) - 1 + 'px';
}); 