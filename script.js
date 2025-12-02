document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('mainContent');
    const lineProgress = document.getElementById('lineProgress');
    const menuBtn = document.getElementById('menuBtn');
    const langButtons = document.querySelectorAll('.lang-btn');
    const titleLines = document.querySelectorAll('.title-line');
    const siteName = document.querySelectorAll('.site-name');
    const contactLinks = document.querySelectorAll('.contact-link');
    const menuTexts = document.querySelectorAll('.menu-text');
    const aboutSection = document.querySelector('.about-section');

    function startLoadingAnimation() {
        lineProgress.style.width = '100%';
        
        setTimeout(() => {
            preloader.classList.add('fade-out');
            
            setTimeout(() => {
                mainContent.classList.add('show');
                
                // Добавляем класс для анимации раздела "Про меня"
                setTimeout(() => {
                    if (aboutSection) {
                        aboutSection.classList.add('visible');
                    }
                }, 1200); // Задержка для появления после заголовка
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
                    siteName.forEach(el => el.textContent = 'ARTYOM MIKHALEV');
                    if (titleLines[0]) titleLines[0].textContent = 'ARTYOM';
                    if (titleLines[1]) titleLines[1].textContent = 'MIKHALEV';
                    contactLinks.forEach(el => el.textContent = 'contact');
                    menuTexts.forEach(el => el.textContent = 'menu');
                    const subtitle = document.querySelector('.hero-subtitle .subtitle-line');
                    if (subtitle) subtitle.textContent = 'DESIGNER';
                    
                    // Перевод раздела "Про меня"
                    const sectionTitle = document.querySelector('.section-title');
                    if (sectionTitle) sectionTitle.textContent = 'ABOUT ME';
                    
                    const aboutText = document.querySelector('.about-text');
                    if (aboutText) {
                        aboutText.textContent = 'Combining five years of design practice and current business experience, I create websites, identity and strategies for companies and individuals, helping to make their brands more visible, understandable and valuable';
                    }
                } else {
                    siteName.forEach(el => el.textContent = 'АРТЁМ МИХАЛЕВ');
                    if (titleLines[0]) titleLines[0].textContent = 'АРТЁМ';
                    if (titleLines[1]) titleLines[1].textContent = 'МИХАЛЕВ';
                    contactLinks.forEach(el => el.textContent = 'связаться');
                    menuTexts.forEach(el => el.textContent = 'меню');
                    const subtitle = document.querySelector('.hero-subtitle .subtitle-line');
                    if (subtitle) subtitle.textContent = 'ДИЗАЙНЕР';
                    
                    // Перевод раздела "Про меня" обратно на русский
                    const sectionTitle = document.querySelector('.section-title');
                    if (sectionTitle) sectionTitle.textContent = 'ПРО МЕНЯ';
                    
                    const aboutText = document.querySelector('.about-text');
                    if (aboutText) {
                        aboutText.textContent = 'Объединив пятилетнюю практику дизайна и действующий опыт в бизнесе, создаю сайты, айдентику и стратегии для компаний и частных лиц, помогая сделать их бренды заметнее, понятнее и дороже';
                    }
                }
            });
        });
    }
    
    function setupMenu() {
        if (menuBtn) {
            menuBtn.addEventListener('click', function() {
                alert('Меню будет реализовано позже');
            });
        }
    }
    
    function animateTitleLetters() {
        const heroSubtitle = document.getElementById('heroSubtitle');
        const heroTitle = document.getElementById('heroTitle');
        
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
        // Предзагрузка изображений
        const cloudsImg = new Image();
        cloudsImg.src = 'clouds.jpg';
        
        startLoadingAnimation();
        setupLanguageSwitcher();
        setupMenu();
        
        setTimeout(() => {
            animateTitleLetters();
        }, 1500);
        
        // Добавляем отслеживание скролла для показа раздела "Про меня"
        // (альтернативный вариант, если хотите показывать при скролле)
        // window.addEventListener('scroll', function() {
        //     if (aboutSection && isElementInViewport(aboutSection)) {
        //         aboutSection.classList.add('visible');
        //     }
        // });
    }
    
    // Вспомогательная функция для проверки видимости элемента
    // function isElementInViewport(el) {
    //     const rect = el.getBoundingClientRect();
    //     return (
    //         rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    //     );
    // }
    
    init();
});