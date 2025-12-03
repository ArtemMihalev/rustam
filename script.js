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
    const projectsSection = document.querySelector('.projects-section');
    
    function startLoadingAnimation() {
    lineProgress.style.width = '100%';
    
    setTimeout(() => {
        preloader.classList.add('fade-out');
        
        setTimeout(() => {
            mainContent.classList.add('show');
        }, 300);
    }, 1000);
    
   
    window.addEventListener('scroll', function() {
        if (aboutSection && !aboutSection.classList.contains('visible')) {
            const rect = aboutSection.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight * 0.8) {
                aboutSection.classList.add('visible');
            }
        }
    });
    
  
    setTimeout(() => {
        if (aboutSection && !aboutSection.classList.contains('visible')) {
            const rect = aboutSection.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight) {
                aboutSection.classList.add('visible');
            }
        }
    }, 500);
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
                    const ideasText = document.querySelector('.ideas-text');
                    if (ideasText) ideasText.textContent = 'IDEAS DESERVE';
                  
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
                    const ideasText = document.querySelector('.ideas-text');
                    if (ideasText) ideasText.textContent = 'ИДЕИ ЗАСЛУЖИВАЮТ';
                
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
  
    const cloudsImg = new Image();
    cloudsImg.src = 'clouds.jpg';
    const seaImg = new Image();
    seaImg.src = 'sea.jpg';
   
    
    startLoadingAnimation();
    setupLanguageSwitcher();
    setupMenu();
    
    setTimeout(() => {
        animateTitleLetters();
    }, 1500);
    
   
    window.addEventListener('scroll', function() {
     
        if (projectsSection && !projectsSection.classList.contains('visible')) {
            const rect = projectsSection.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight * 0.8) {
                projectsSection.classList.add('visible');
            }
        }
        
    
        const contactSection = document.querySelector('.contact-section');
        if (contactSection && !contactSection.classList.contains('visible')) {
            const rect = contactSection.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight * 0.8) {
                contactSection.classList.add('visible');
            }
        }
    });

 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}
    
    
    
    init();
});