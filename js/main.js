document.addEventListener('DOMContentLoaded', function() {
  const menuIcons = document.querySelectorAll('.menu__icon');
  const jsIcon = document.querySelector('.js-icon');
  const resume = document.querySelector('.js-resume');
  const anchors = document.querySelectorAll('a[href^="#"]');

  menuIcons.forEach(function(icon) {
    icon.addEventListener('mouseenter', function() {
      icon.classList.add('menu__icon--open');
    });
    icon.addEventListener('mouseleave', function() {
      icon.classList.remove('menu__icon--open');
    });
  });

  jsIcon.addEventListener('click', function() {
    resume.classList.toggle('icon--active');
    resume.style.display = resume.style.display === 'block' ? 'none' : 'block';
  });

  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = anchor.getAttribute('href').substr(1);
      const target = document.getElementById(targetId) || document.documentElement;
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
});
