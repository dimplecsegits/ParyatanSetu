function switchTab(tab) {
    const touristForm = document.getElementById('tourist-form');
    const providerForm = document.getElementById('service-provider-form');
    const tabs = document.querySelectorAll('.tab');

    if (tab === 'tourist') {
        touristForm.classList.add('active');
        providerForm.classList.remove('active');
    } else {
        providerForm.classList.add('active');
        touristForm.classList.remove('active');
    }

    tabs.forEach(t => t.classList.remove('active'));
    document.querySelector(`.tab[onclick="switchTab('${tab}')"]`).classList.add('active');
}

document.getElementById('tourist-login-signup').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Tourist form submitted');
});

document.getElementById('provider-login-signup').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Service provider form submitted');
});
