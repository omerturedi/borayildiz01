document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Basit bir doğrulama (gerçek uygulamada bu işlem sunucu tarafında yapılmalıdır)
        if (username === 'admin' && password === 'admin') {
            // Başarılı giriş
            localStorage.setItem('authToken', 'dummy-token');
            window.location.href = 'dashboard.html';
        } else {
            // Başarısız giriş
            alert('Kullanıcı adı veya şifre hatalı!');
        }
    });
}); 