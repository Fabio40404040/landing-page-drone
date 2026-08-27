import { config } from '../data/config.js';

const formasPagamento = [
  { rotulo: 'Cartão', detalhe: 'adiantamento por link ou maquininha', forma: 'no cartão' },
  { rotulo: 'Pix', detalhe: 'adiantamento na hora, com QR code', forma: 'no Pix' },
  { rotulo: 'Dinheiro', detalhe: 'adiantamento em espécie, antes da data', forma: 'em dinheiro' }
];

export function renderPagamento() {
  const texto = document.getElementById('pagamento-texto');
  const grid = document.getElementById('pagamento-grid');
  if (!texto || !grid) return;

  texto.textContent =
    `Para garantir sua data, pedimos um adiantamento. Em caso de desistência, ` +
    `${config.taxaCancelamento} do valor é retido como taxa de reserva.`;

  grid.innerHTML = formasPagamento.map(f => `
    <button type="button" class="pagamento-btn js-pagamento-btn" data-forma="${f.forma}" aria-pressed="false">
      <span class="pagamento-btn__rotulo">${f.rotulo}</span>
      <span class="pagamento-btn__detalhe">${f.detalhe}</span>
    </button>
  `).join('');
}

// Liga o clique dos botões: só marca qual foi escolhida (não envia nada ainda).
export function initPagamento() {
  const grid = document.getElementById('pagamento-grid');
  if (!grid) return;

  grid.addEventListener('click', (event) => {
    const botao = event.target.closest('.js-pagamento-btn');
    if (!botao) return;

    grid.querySelectorAll('.js-pagamento-btn').forEach((b) => {
      b.classList.remove('pagamento-btn--ativo');
      b.setAttribute('aria-pressed', 'false');
    });
    botao.classList.add('pagamento-btn--ativo');
    botao.setAttribute('aria-pressed', 'true');
    grid.dataset.formaEscolhida = botao.dataset.forma;
    grid.dispatchEvent(new CustomEvent('pagamento:alterado', { bubbles: true }));
  });
}

// Usado pelo botão final "Chamar no WhatsApp" pra saber qual forma foi marcada.
export function getFormaEscolhida() {
  return document.getElementById('pagamento-grid')?.dataset.formaEscolhida || '';
}
