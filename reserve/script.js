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
        titleLines.forEach((line, index) => {
            const text = line.textContent;
            line.textContent = '';
            
            const lettersWrapper = document.createElement('span');
            lettersWrapper.className = 'letters-wrapper';
            
            for (let i = 0; i < text.length; i++) {
                const letterSpan = document.createElement('span');
                letterSpan.className = 'letter';
                letterSpan.textContent = text[i];
                letterSpan.style.opacity = '0';
                letterSpan.style.transform = 'translateY(20px)';
                letterSpan.style.display = 'inline-block';
                letterSpan.style.transition = `opacity 0.3s ease ${(i * 0.03) + (index * 0.2)}s, transform 0.3s ease ${(i * 0.03) + (index * 0.2)}s`;
                
                lettersWrapper.appendChild(letterSpan);
            }
            
            line.appendChild(lettersWrapper);
            
            setTimeout(() => {
                const letters = lettersWrapper.querySelectorAll('.letter');
                letters.forEach(letter => {
                    letter.style.opacity = '1';
                    letter.style.transform = 'translateY(0)';
                });
            }, 1000 + (index * 200));
        });
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