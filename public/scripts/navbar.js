document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (!navbar) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 80) {
      navbar.classList.add('scrolled');
    } else if (scrollTop < 20) {
      navbar.classList.remove('scrolled');
    }
  });
});
