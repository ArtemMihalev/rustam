document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('mainContent');
    const lineProgress = document.getElementById('lineProgress');
    const menuBtn = document.getElementById('menuBtn');
    const langButtons = document.querySelectorAll('.lang-btn');
    const titleLines = document.querySelectorAll('.title-line');
    const siteName = document.querySelectorAll('.site-name');
    const contactLinks = document.querySelectorAll('.contact-link');
    const langBtnTexts = document.querySelectorAll('.lang-btn');
    const menuTexts = document.querySelectorAll('.menu-text');
    const langSeparators = document.querySelectorAll('.lang-separator');

    function startLoadingAnimation() {
        lineProgress.style.width = '100%';
        
        setTimeout(() => {
            preloader.classList.add('fade-out');
            
            setTimeout(() => {
                mainContent.classList.add('show');
            }, 300);
        }, 1000);
    }
    
    function setupLanguageSwitcher() {
        langButtons.forEach(button => {
            button.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                
                langButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                if (lang === 'en') {
                    siteName.forEach(el => el.textContent = 'RUSTAM BALYAEV');
                    if (titleLines[0]) titleLines[0].textContent = 'RUSTAM';
                    if (titleLines[1]) titleLines[1].textContent = 'BALYAEV';
                    contactLinks.forEach(el => el.textContent = 'contact');
                    menuTexts.forEach(el => el.textContent = 'menu');
                } else {
                    siteName.forEach(el => el.textContent = 'РУСТАМ БАЛЯЕВ');
                    if (titleLines[0]) titleLines[0].textContent = 'РУСТАМ';
                    if (titleLines[1]) titleLines[1].textContent = 'БАЛЯЕВ';
                    contactLinks.forEach(el => el.textContent = 'связаться');
                    menuTexts.forEach(el => el.textContent = 'меню');
                }
            });
        });
    }
    
    function setupMenu() {
        menuBtn.addEventListener('click', function() {
            alert('Меню будет реализовано позже');
        });
    }
    
   function animateTitleLetters() {
    // Просто добавляем класс для анимации всего заголовка
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    
    // Анимация подзаголовка "ДИЗАЙНЕР"
    setTimeout(() => {
        if (heroSubtitle) {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }
    }, 800);
    
    // Анимация основного заголовка (целиком)
    setTimeout(() => {
        if (heroTitle) {
            const titleLines = heroTitle.querySelectorAll('.title-line');
            titleLines.forEach(line => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            });
        }
    }, 1000);
}
    
    function init() {
        startLoadingAnimation();
        setupLanguageSwitcher();
        setupMenu();
        
        setTimeout(() => {
            animateTitleLetters();
        }, 1500);
    }
    
    init();
});

function updateTextContent(lang) {
    if (lang === 'en') {
        siteName.forEach(el => el.textContent = 'RUSTAM BALYAEV');
        if (titleLines[0]) titleLines[0].textContent = 'RUSTAM';
        if (titleLines[1]) titleLines[1].textContent = 'BALYAEV';
        contactLinks.forEach(el => el.textContent = 'contact');
        menuTexts.forEach(el => el.textContent = 'menu');
        
        // Добавьте для подзаголовка
        const subtitle = document.querySelector('.hero-subtitle .subtitle-line');
        if (subtitle) subtitle.textContent = 'DESIGNER';
    } else {
        siteName.forEach(el => el.textContent = 'РУСТАМ БАЛЯЕВ');
        if (titleLines[0]) titleLines[0].textContent = 'РУСТАМ';
        if (titleLines[1]) titleLines[1].textContent = 'БАЛЯЕВ';
        contactLinks.forEach(el => el.textContent = 'связаться');
        menuTexts.forEach(el => el.textContent = 'меню');
        
        // Добавьте для подзаголовка
        const subtitle = document.querySelector('.hero-subtitle .subtitle-line');
        if (subtitle) subtitle.textContent = 'ДИЗАЙНЕР';
    }
}

function fadeOutText(callback) {
    const elements = [...siteName, ...titleLines, ...contactLinks, ...menuTexts];
    const subtitle = document.querySelector('.hero-subtitle .subtitle-line');
    if (subtitle) elements.push(subtitle);
    
    elements.forEach(el => {
        el.style.transition = 'opacity 0.3s ease';
        el.style.opacity = '0';
    });
    
    setTimeout(callback, 300);
}

function fadeInText() {
    const elements = [...siteName, ...titleLines, ...contactLinks, ...menuTexts];
    const subtitle = document.querySelector('.hero-subtitle .subtitle-line');
    if (subtitle) elements.push(subtitle);
    
    elements.forEach(el => {
        el.style.opacity = '1';
    });
}