document.addEventListener('DOMContentLoaded', () => {
    // Yayın filtreleme
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publications = document.querySelectorAll('.publication-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aktif buton stilini güncelle
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Yayınları filtrele
            const filter = button.getAttribute('data-filter');
            publications.forEach(pub => {
                if (filter === 'all' || pub.classList.contains(filter)) {
                    pub.style.display = 'block';
                } else {
                    pub.style.display = 'none';
                }
            });
        });
    });

    // Dil değiştirme işlevselliği
    const langButtons = document.querySelectorAll('.lang-btn');
    
    function updateLanguage(lang) {
        // Aktif buton stilini güncelle
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        // Dili değiştir
        if (typeof changeLanguage === 'function') {
            changeLanguage(lang);
        }

        // Dil tercihini kaydet
        localStorage.setItem('preferredLanguage', lang);
    }

    // Dil butonlarına tıklama olayı ekle
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // Sayfa yüklendiğinde varsayılan dili ayarla
    const savedLang = localStorage.getItem('preferredLanguage') || 'tr';
    updateLanguage(savedLang);

    // Mobil menü işlevselliği
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Sayfa kaydırma animasyonu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Mobil menüyü kapat
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Aktif bölümü takip et
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav a');

    function setActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    window.addEventListener('load', setActiveLink);
});
