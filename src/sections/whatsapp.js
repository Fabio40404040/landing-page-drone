import { linkWhatsapp } from '../data/config.js';

// / Todo link com class="js-whatsapp" e data-msg="..." no HTML
// recebe aqui o href real, com o número da empresa e a mensagem prontos.
export function wireWhatsappLinks() {
  document.querySelectorAll('.js-whatsapp').forEach((link) => {
    const mensagem = link.dataset.msg || 'Olá! Vim pelo site e quero saber mais sobre os serviços de drone.';
    link.href = linkWhatsapp(mensagem);
    link.target = '_blank';
    link.rel = 'noopener';
  });
}
