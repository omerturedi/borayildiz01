document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        try {
            // Burada gerçek bir API çağrısı yapılacak
            const response = await loginUser(username, password);
            
            if (response.success) {
                // Başarılı giriş
                localStorage.setItem('authToken', response.token);
                window.location.href = 'admin/dashboard.html';
            } else {
                // Başarısız giriş
                showError('Kullanıcı adı veya şifre hatalı!');
            }
        } catch (error) {
            showError('Giriş yapılırken bir hata oluştu. Lütfen tekrar deneyin.');
        }
    });
});

// Giriş işlemi simülasyonu (gerçek uygulamada bir API'ye istek yapılacak)
async function loginUser(username, password) {
    // Bu kısım gerçek uygulamada backend API'sine bağlanacak
    return new Promise((resolve) => {
        setTimeout(() => {
            // Test için sabit kullanıcı adı ve şifre
            if (username === 'admin' && password === 'password123') {
                resolve({
                    success: true,
                    token: 'dummy-jwt-token'
                });
            } else {
                resolve({
                    success: false,
                    message: 'Geçersiz kullanıcı adı veya şifre'
                });
            }
        }, 1000);
    });
}

// Hata mesajı gösterme fonksiyonu
function showError(message) {
    // Mevcut hata mesajını temizle
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Yeni hata mesajı oluştur
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        color: #dc3545;
        background: #fde8e8;
        padding: 0.75rem;
        border-radius: 4px;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        text-align: center;
    `;
    errorDiv.textContent = message;
    
    // Hata mesajını forma ekle
    const form = document.getElementById('loginForm');
    form.insertBefore(errorDiv, form.firstChild);
    
    // 5 saniye sonra hata mesajını kaldır
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
} 