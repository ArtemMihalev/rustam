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
                const subtitle = document.querySelector('.hero-subtitle .subtitle-line');
                if (subtitle) subtitle.textContent = 'DESIGNER';
            } else {
                siteName.forEach(el => el.textContent = 'РУСТАМ БАЛЯЕВ');
                if (titleLines[0]) titleLines[0].textContent = 'РУСТАМ';
                if (titleLines[1]) titleLines[1].textContent = 'БАЛЯЕВ';
                contactLinks.forEach(el => el.textContent = 'связаться');
                menuTexts.forEach(el => el.textContent = 'меню');
                const subtitle = document.querySelector('.hero-subtitle .subtitle-line');
                if (subtitle) subtitle.textContent = 'ДИЗАЙНЕР';
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
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    
    setTimeout(() => {
        if (heroSubtitle) {
            heroSubtitle.style.opacity = '1';
        }
        if (heroTitle) {
            const titleLines = heroTitle.querySelectorAll('.title-line');
            titleLines.forEach(line => {
                line.style.opacity = '1';
            });
        }
    }, 800);
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

