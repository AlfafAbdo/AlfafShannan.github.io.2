
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }}

// إضافة التمرير السلس عند النقر على الروابط
document.querySelectorAll('.topnav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // إلغاء السلوك الافتراضي للرابط
        const targetId = this.getAttribute('href'); // الحصول على معرف القسم
        const targetSection = document.querySelector(targetId); // القسم المستهدف
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // تطبيق التمرير السلس
        }
    });
});
window.addEventListener('scroll', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    fadeInElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
document.addEventListener('scroll', () => {
    const welcomeText = document.querySelector('.welcome-section h2');
    const aboutMeSection = document.querySelector('.about-me-section');
    
    const rect = aboutMeSection.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        welcomeText.style.opacity = '0'; 
        welcomeText.style.transform = 'translate(-50%, -20%)'; 
    } else {
        welcomeText.style.opacity = '1'; 
        welcomeText.style.transform = 'translate(-50%, -50%)'; 
    }
});
document.addEventListener('scroll', () => {
    const skillsDescription = document.querySelector('.skills-description');
    const skillsSection = document.getElementById('skills');
    const rect = skillsSection.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        skillsDescription.classList.add('visible'); 
    } else {
        skillsDescription.classList.remove('visible'); 
    }
});






