// BULMA portfolio — comportements légers (menu mobile)
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navMenu.inert = true;

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navMenu.inert = !isOpen;
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.inert = true;
  });
});
