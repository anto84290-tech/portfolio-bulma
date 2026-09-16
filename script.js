// BULMA portfolio — comportements légers (menu mobile)
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Le hamburger n'est visible qu'en dessous de 768px (voir style.css) :
// on ne rend le menu inert que dans ce cas, sinon les liens restent
// cliquables même quand ils sont affichés en ligne sur desktop.
const isMobileNav = () => getComputedStyle(navToggle).display !== 'none';

const syncInert = () => {
  navMenu.inert = isMobileNav() && !navMenu.classList.contains('open');
};

syncInert();
window.addEventListener('resize', syncInert);

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navMenu.inert = !isOpen;
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    syncInert();
  });
});
