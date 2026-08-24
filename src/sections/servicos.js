import { servicos } from '../data/servicos';

export function renderServicos() {
  const el = document.getElementById('servico-grid');
  if (!el) return;

  el.innerHTML = servicos.map((s, i) => `
    <li class="servico-card">
      <span class="servico-card__index">0${i + 1}</span>
      <img class="servico-card__icon" src="${s.icone}" alt="" width="40" height="40" />
      <p class="servico-card__nicho">${s.nicho}</p>
      <h3 class="servico-card__titulo">${s.titulo}</h3>
      <p class="servico-card__desc">${s.descricao}</p>
      <a class="servico-card__link js-whatsapp"
         href="#" data-msg="Olá! Quero um orçamento para o serviço de &quot;${s.titulo}&quot;.">
        Pedir orçamento →
      </a>
    </li>
  `).join('');
}
