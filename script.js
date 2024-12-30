document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const correctPassword = 'html'; // Password yang benar
    const inputPassword = document.getElementById('password').value; // Mengambil nilai dari input password
    const message = document.getElementById('message');

    if (inputPassword === correctPassword) {
        // Jika password benar, arahkan ke antirobot.html
        window.location.href = 'antirobot.html';
    } else {
        message.textContent = 'Password salah. Silakan coba lagi.';
        message.style.color = 'red';
    }
});