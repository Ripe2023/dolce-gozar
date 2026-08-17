const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelector('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lines = [
    'Hola Dolce Gozar, quiero solicitar una cotización:',
    `Nombre: ${data.get('nombre')}`,
    `Celebración: ${data.get('evento')}`,
    `Fecha: ${data.get('fecha') || 'Por definir'}`,
    `Personas: ${data.get('personas') || 'Por definir'}`,
    `Detalles: ${data.get('mensaje') || 'Sin detalles adicionales'}`
  ];
  window.open(`https://wa.me/56974097705?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
});
document.querySelector('#year').textContent = new Date().getFullYear();
