document.addEventListener('DOMContentLoaded', () => {
    // Oturum kontrolü
    checkAuth();
    
    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const adminSidebar = document.querySelector('.admin-sidebar');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            adminSidebar.classList.toggle('active');
        });
    }
    
    // Navigasyon
    const navLinks = document.querySelectorAll('.admin-nav a');
    const sections = document.querySelectorAll('.section');
    const pageTitle = document.getElementById('pageTitle');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            
            // Aktif link ve bölümü güncelle
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                    pageTitle.textContent = link.querySelector('span').textContent;
                }
            });
            
            // Mobil görünümde sidebar'ı kapat
            if (window.innerWidth <= 768) {
                adminSidebar.classList.remove('active');
            }
        });
    });
    
    // Profil fotoğrafı önizleme
    const profilePhoto = document.getElementById('profilePhoto');
    const profilePreview = document.getElementById('profilePreview');
    
    if (profilePhoto && profilePreview) {
        profilePhoto.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    profilePreview.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Profil kaydetme
    const saveProfileBtn = document.getElementById('saveProfile');
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', async () => {
            showNotification('Profil bilgileri güncellendi', 'success');
        });
    }
    
    // Yayın ekleme
    const addPublicationBtn = document.getElementById('addPublication');
    if (addPublicationBtn) {
        addPublicationBtn.addEventListener('click', () => {
            // Yayın ekleme modalını göster
            showPublicationModal();
        });
    }
    
    // Dosya yükleme
    const uploadFileBtn = document.getElementById('uploadFile');
    if (uploadFileBtn) {
        uploadFileBtn.addEventListener('click', () => {
            // Dosya yükleme modalını göster
            showFileUploadModal();
        });
    }
    
    // Çıkış yapma
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            logout();
        });
    }
});

// Oturum kontrolü
function checkAuth() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        window.location.href = '../login.html';
    }
}

// Çıkış yapma
function logout() {
    localStorage.removeItem('authToken');
    window.location.href = '../login.html';
}

// Bildirim gösterme
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 4px;
        background: ${type === 'success' ? '#4caf50' : '#f44336'};
        color: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Yayın ekleme modalı
function showPublicationModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Yeni Yayın Ekle</h2>
            <form id="publicationForm">
                <div class="form-group">
                    <label>Başlık</label>
                    <input type="text" required>
                </div>
                <div class="form-group">
                    <label>Yazarlar</label>
                    <input type="text" required>
                </div>
                <div class="form-group">
                    <label>Dergi</label>
                    <input type="text" required>
                </div>
                <div class="form-group">
                    <label>Yıl</label>
                    <input type="number" required>
                </div>
                <div class="form-group">
                    <label>PDF Dosyası</label>
                    <input type="file" accept=".pdf">
                </div>
                <div class="modal-actions">
                    <button type="button" class="cancel-btn">İptal</button>
                    <button type="submit" class="save-btn">Kaydet</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Modal kapatma
    modal.querySelector('.cancel-btn').addEventListener('click', () => {
        modal.remove();
    });
    
    // Form gönderme
    modal.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Yayın kaydetme işlemleri
        showNotification('Yayın başarıyla eklendi');
        modal.remove();
    });
}

// Dosya yükleme modalı
function showFileUploadModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Dosya Yükle</h2>
            <form id="fileUploadForm">
                <div class="form-group">
                    <label>Dosya Seç</label>
                    <input type="file" required>
                </div>
                <div class="form-group">
                    <label>Dosya Açıklaması</label>
                    <input type="text">
                </div>
                <div class="modal-actions">
                    <button type="button" class="cancel-btn">İptal</button>
                    <button type="submit" class="save-btn">Yükle</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Modal kapatma
    modal.querySelector('.cancel-btn').addEventListener('click', () => {
        modal.remove();
    });
    
    // Form gönderme
    modal.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Dosya yükleme işlemleri
        showNotification('Dosya başarıyla yüklendi');
        modal.remove();
    });
}

// CSS Animasyonları
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
    
    .modal-content {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        width: 100%;
        max-width: 500px;
        animation: modalIn 0.3s ease;
    }
    
    .modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        margin-top: 2rem;
    }
    
    @keyframes modalIn {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;

document.head.appendChild(style); 