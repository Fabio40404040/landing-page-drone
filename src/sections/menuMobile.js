export function initMenuMobile() {
  const botao = document.querySelector('.header__menu-button');
  const menu = document.getElementById('menu-principal');
  if (!botao || !menu) return;

  const fecharMenu = () => {
    menu.classList.remove('header__nav--aberto');
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu');
  };

  botao.addEventListener('click', () => {
    const aberto = botao.getAttribute('aria-expanded') === 'true';
    menu.classList.toggle('header__nav--aberto', !aberto);
    botao.setAttribute('aria-expanded', String(!aberto));
    botao.setAttribute('aria-label', aberto ? 'Abrir menu' : 'Fechar menu');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', fecharMenu);
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.header')) fecharMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && botao.getAttribute('aria-expanded') === 'true') {
      fecharMenu();
      botao.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) fecharMenu();
  });
}
