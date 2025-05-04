window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
  
    const navbar = document.querySelector('.navbar');
    navbar.style.setProperty('--progress', `${scrollPercent}%`);
  });
  