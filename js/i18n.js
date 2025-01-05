// Çeviri verileri
const translations = {
    tr: {
        'name': 'Prof. Dr. Bora Yıldız',
        'title': 'Profesör',
        'home': 'Ana Sayfa',
        'admin-login': 'Yönetici Girişi',
        'biography': 'Biyografi',
        'research': 'Araştırma',
        'publications': 'Yayınlar',
        'teaching': 'Dersler',
        'contact': 'İletişim',
        'university': 'İstanbul Üniversitesi',
        'department': 'İktisat Fakültesi',
        'biography-content': 'Prof. Dr. Bora Yıldız, 1 Ekim 2024 tarihinde İstanbul Üniversitesi İktisat Fakültesi İşletme Bölümü Yönetim ve Organizasyon Anabilim Dalı\'nda Profesör olarak atanmıştır. Daha önce, 17 Temmuz 2018\'de yönetim ve strateji alanında "Doçent" unvanını almış ve 3 Mart 2016\'da İstanbul Üniversitesi ailesine "Yardımcı Doçent" olarak katılmıştır.\n\nÖrgütsel davranış, insan kaynakları yönetimi, örgütsel psikoloji, yönetim psikolojisi, liderlik ve girişimcilik alanlarında uzmanlaşmıştır. Akademik kariyeri boyunca 28 yüksek lisans projesi ve 11 yüksek lisans tezi yönetmiş olup, şu anda 4 yüksek lisans ve 4 doktora tezi danışmanlığı devam etmektedir.\n\nWeb of Science indeksinde 250\'den fazla atıf (h-indeks: 10) ve Google Scholar indeksinde 2000\'den fazla atıf (h-indeks: 28) almıştır. SSCI-Q1 indeksli Frontiers in Psychology dergisinde misafir editör yardımcısı olarak görev yapmaktadır.\n\n2024 Dünya Bilim İnsanı ve Üniversite Sıralamaları istatistiklerine göre, İşletme ve Yönetim alanında önde gelen bilim insanları arasında yer almaktadır (İstanbul Üniversitesi\'nde 1., Türkiye\'de ilk %3).\n\nAyrıca "Cıva Emisyonu Önleme Aparatı" için tescilli bir patent sahibidir ve TÜBİTAK destekli araştırmaları ile uluslararası etkiye sahip önemli bir araştırmacıdır. İngiltere\'de Brunel University London, Brunel Business School ve Birkbeck College, University of London\'da gerçekleştirdiği araştırmalarla akademik çalışmalarının uluslararası boyutunu genişletmiştir.',
        'research-1': 'Makroekonomi',
        'research-2': 'Uluslararası İktisat',
        'research-3': 'Ekonomik Büyüme',
        'research-4': 'Para Politikası',
        'research-5': 'Finansal Piyasalar',
        'pub-1-title': 'Ekonomik Büyüme ve Finansal Gelişme',
        'pub-1-authors': 'Bora Yıldız',
        'pub-1-journal': 'Ekonomi Dergisi, 2023',
        'pub-2-title': 'Para Politikası ve Makroekonomik Etkileri',
        'pub-2-authors': 'Bora Yıldız, Diğer Yazar',
        'pub-2-journal': 'İktisat Araştırmaları, 2022',
        'course-1-code': 'ECO401',
        'course-1-title': 'Makroekonomi',
        'course-1-desc': 'Lisans düzeyinde makroekonomi dersi. Ekonomik büyüme, enflasyon, işsizlik ve para politikası konuları işlenmektedir.',
        'course-2-code': 'ECO502',
        'course-2-title': 'Uluslararası İktisat',
        'course-2-desc': 'Yüksek lisans düzeyinde uluslararası iktisat dersi. Uluslararası ticaret teorileri ve politikaları incelenmektedir.',
        'office': 'İstanbul Üniversitesi, İktisat Fakültesi',
        'email': 'bora.yildiz@istanbul.edu.tr',
        'phone': '+90 212 XXX XX XX',
        'address': 'Beyazıt, 34452 Fatih/İstanbul',
        'rights': 'Tüm hakları saklıdır',
        'education': 'Eğitim',
        'postdoc': 'Post Doktora',
        'postdoc-university': 'University of London-Birkbeck College, School of Business, Economics and Informatics, Department of Organizational Psychology',
        'postdoc-country': 'İngiltere',
        'phd': 'Doktora',
        'phd-university': 'Gebze Teknik Üniversitesi, Sosyal Bilimler Enstitüsü',
        'phd-department': 'İşletme (İngilizce)',
        'masters-2': 'Yüksek Lisans',
        'masters-2-university': 'İstanbul Medeniyet Üniversitesi, Lisansüstü Eğitim Enstitüsü',
        'masters-2-department': 'Siyaset Bilimi ve Kamu Yönetimi',
        'masters-1': 'Yüksek Lisans',
        'masters-1-university': 'Beykent Üniversitesi, Sosyal Bilimler Enstitüsü',
        'masters-1-department': 'İşletme',
        'bachelors': 'Lisans',
        'bachelors-university': 'Anadolu Üniversitesi, İktisadi ve İdari Bilimler Fakültesi',
        'bachelors-department': 'Kamu Yönetimi',
        'languages': 'Yabancı Diller',
        'english': 'İngilizce',
        'english-level': 'C1 İleri',
        'german': 'Almanca',
        'german-level': 'B1 Orta',
        'academic-positions': 'Akademik Pozisyonlar',
        'current-position': 'Profesör',
        'current-department': 'İstanbul Üniversitesi, İktisat Fakültesi',
        'previous-position-1': 'Doçent',
        'previous-department-1': 'İstanbul Üniversitesi, İktisat Fakültesi',
        'previous-position-2': 'Yardımcı Doçent',
        'previous-department-2': 'İstanbul Üniversitesi, İktisat Fakültesi',
        'research-interests': 'Araştırma Alanları',
        'interest-1': 'Makroekonomi ve Para Politikası',
        'interest-2': 'Uluslararası İktisat ve Finans',
        'interest-3': 'Ekonomik Büyüme ve Kalkınma',
        'interest-4': 'Finansal Piyasalar ve Kurumlar',
        'interest-5': 'İktisat Teorisi',
        'download-pdf': 'PDF İndir'
    },
    en: {
        'name': 'Prof. Dr. Bora Yildiz',
        'title': 'Professor',
        'home': 'Home',
        'admin-login': 'Admin Login',
        'biography': 'Biography',
        'research': 'Research',
        'publications': 'Publications',
        'teaching': 'Teaching',
        'contact': 'Contact',
        'university': 'Istanbul University',
        'department': 'Faculty of Economics',
        'biography-content': 'Prof. Dr. Bora Yıldız was appointed as Professor in the Department of Business Administration, Faculty of Economics, Department of Management and Organization at Istanbul University on October 1, 2024. Previously, he earned the title of "Associate Professor" in management and strategy on July 17, 2018, and joined the Istanbul University family as an "Assistant Professor" on March 3, 2016.\n\nHe specializes in organizational behavior, human resource management, organizational psychology, management psychology, leadership, and entrepreneurship. Throughout his academic career, he has directed 28 master\'s projects and 11 master\'s theses, and is currently supervising 4 master\'s theses and 4 doctoral theses.\n\nHis publications have received over 250 citations (h-index: 10) in the Web of Science index and more than 2000 citations (h-index: 28) in the Google Scholar index. He serves as a guest associate editor for Frontiers in Psychology, which is indexed in SSCI-Q1.\n\nBased on the 2024 World Scientist and University Rankings statistics, he is ranked among the top scientists in Business & Management (1st at Istanbul University, top 3% in Türkiye).\n\nAdditionally, he holds a registered patent for an "Apparatus for Mercury Emission Prevention" and is a prominent researcher with internationally impactful research supported by TÜBİTAK. He has expanded the international dimension of his academic work through research conducted at Brunel University London, Brunel Business School, and Birkbeck College, University of London in the United Kingdom.',
        'research-1': 'Macroeconomics',
        'research-2': 'International Economics',
        'research-3': 'Economic Growth',
        'research-4': 'Monetary Policy',
        'research-5': 'Financial Markets',
        'pub-1-title': 'Economic Growth and Financial Development',
        'pub-1-authors': 'Bora Yildiz',
        'pub-1-journal': 'Journal of Economics, 2023',
        'pub-2-title': 'Monetary Policy and Macroeconomic Effects',
        'pub-2-authors': 'Bora Yildiz, Other Author',
        'pub-2-journal': 'Economic Research, 2022',
        'course-1-code': 'ECO401',
        'course-1-title': 'Macroeconomics',
        'course-1-desc': 'Undergraduate level macroeconomics course. Covers economic growth, inflation, unemployment, and monetary policy.',
        'course-2-code': 'ECO502',
        'course-2-title': 'International Economics',
        'course-2-desc': 'Graduate level international economics course. Examines international trade theories and policies.',
        'office': 'Istanbul University, Faculty of Economics',
        'email': 'bora.yildiz@istanbul.edu.tr',
        'phone': '+90 212 XXX XX XX',
        'address': 'Beyazit, 34452 Fatih/Istanbul',
        'rights': 'All rights reserved',
        'education': 'Education',
        'postdoc': 'Post Doctorate',
        'postdoc-university': 'University of London-Birkbeck College, School of Business, Economics and Informatics, Department of Organizational Psychology',
        'postdoc-country': 'United Kingdom',
        'phd': 'Ph.D.',
        'phd-university': 'Gebze Technical University, Institute of Social Sciences',
        'phd-department': 'Business Administration (English)',
        'masters-2': 'Master\'s Degree',
        'masters-2-university': 'Istanbul Medeniyet University, Graduate School',
        'masters-2-department': 'Political Science and Public Administration',
        'masters-1': 'Master\'s Degree',
        'masters-1-university': 'Beykent University, Institute of Social Sciences',
        'masters-1-department': 'Business Administration',
        'bachelors': 'Bachelor\'s Degree',
        'bachelors-university': 'Anadolu University, Faculty of Economics and Administrative Sciences',
        'bachelors-department': 'Public Administration',
        'languages': 'Foreign Languages',
        'english': 'English',
        'english-level': 'C1 Advanced',
        'german': 'German',
        'german-level': 'B1 Intermediate',
        'academic-positions': 'Academic Positions',
        'current-position': 'Professor',
        'current-department': 'Istanbul University, Faculty of Economics',
        'previous-position-1': 'Associate Professor',
        'previous-department-1': 'Istanbul University, Faculty of Economics',
        'previous-position-2': 'Assistant Professor',
        'previous-department-2': 'Istanbul University, Faculty of Economics',
        'research-interests': 'Research Interests',
        'interest-1': 'Macroeconomics and Monetary Policy',
        'interest-2': 'International Economics and Finance',
        'interest-3': 'Economic Growth and Development',
        'interest-4': 'Financial Markets and Institutions',
        'interest-5': 'Economic Theory',
        'download-pdf': 'Download PDF'
    }
};

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    
    // Dil butonlarının aktif durumunu güncelle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Tüm çevrilebilir elementleri bul
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        
        if (!translations[lang] || !translations[lang][key]) {
            console.warn(`Translation missing for key "${key}" in language "${lang}"`);
            return;
        }
        
        // Eğer element bir input veya textarea ise placeholder'ı güncelle
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translations[lang][key];
        } else {
            element.textContent = translations[lang][key];
        }
    });

    // HTML lang özelliğini güncelle
    document.documentElement.lang = lang;
    
    // Dil tercihini localStorage'a kaydet
    localStorage.setItem('preferredLanguage', lang);
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Dil butonlarına tıklama olayı ekle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            
            // Tüm butonlardan active sınıfını kaldır
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            
            // Tıklanan butona active sınıfını ekle
            e.target.classList.add('active');
            
            changeLanguage(lang);
        });
    });

    // Kaydedilmiş dil tercihini kontrol et
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        changeLanguage(savedLang);
    } else {
        // Varsayılan olarak Türkçe'yi aktif et
        changeLanguage('tr');
    }
}); 