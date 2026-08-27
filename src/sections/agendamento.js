import { linkWhatsapp } from '../data/config.js';
import { datasOcupadas } from '../data/agenda.js';
import { getFormaEscolhida } from './pagamento.js';

function formatarData(iso) {
  const [ano, mes, dia] = iso.split('-');
  return `${dia}/${mes}`;
}

export function initAgendamento() {
  const botao = document.getElementById('btn-agendar');
  const input = document.getElementById('data-agendamento');
  const aviso = document.getElementById('agendamento-aviso');
  const formularioAviso = document.getElementById('orcamento-aviso');
  const listaOcupadas = document.getElementById('agendamento-ocupadas');
  if (!botao) return;

  if (input) {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');
    input.min = `${ano}-${mes}-${dia}`;
  }

  const atualizarEstado = () => {
    const completo = Boolean(input?.value && input.validity.valid && getFormaEscolhida());
    botao.setAttribute('aria-disabled', String(!completo));
    botao.classList.toggle('btn--incompleto', !completo);
    if (completo && formularioAviso) formularioAviso.hidden = true;
  };

  // Mostra as datas já reservadas, pra pessoa já ver de cara antes de escolher.
  if (listaOcupadas && datasOcupadas.length) {
    listaOcupadas.innerHTML =
      `<span class="agendamento__ocupadas-titulo">Já reservado:</span> ` +
      datasOcupadas.map(d => `<span class="agendamento__chip">${formatarData(d)}</span>`).join('');
  }

  if (input) {
    input.addEventListener('input', () => {
      if (datasOcupadas.includes(input.value)) {
        aviso.textContent = 'Essa data já está reservada. Escolha outra, ou confirme pelo WhatsApp pra ver horários livres.';
        aviso.hidden = false;
        input.value = '';
      } else {
        aviso.hidden = true;
      }
      atualizarEstado();
    });
  }

  document.getElementById('pagamento-grid')?.addEventListener('pagamento:alterado', atualizarEstado);
  atualizarEstado();

  botao.addEventListener('click', () => {
    const forma = getFormaEscolhida();
    if (!input?.value || !input.validity.valid || !forma) {
      if (formularioAviso) {
        if ((!input?.value || !input.validity.valid) && !forma) {
          formularioAviso.textContent = 'Selecione a data e a forma de pagamento para continuar.';
        } else if (!input?.value || !input.validity.valid) {
          formularioAviso.textContent = 'Selecione uma data válida para continuar.';
        } else {
          formularioAviso.textContent = 'Selecione uma forma de pagamento para continuar.';
        }
        formularioAviso.hidden = false;
      }
      (!input?.value ? input : document.querySelector('.js-pagamento-btn'))?.focus();
      return;
    }

    const base = botao.dataset.msgBase || 'Olá! Quero pedir um orçamento para serviço de drone.';
    let mensagem = base;

    const [ano, mes, dia] = input.value.split('-');
    mensagem += ` Gostaria de agendar para o dia ${dia}/${mes}/${ano}.`;

    mensagem += ` Vou fazer o adiantamento ${forma} para garantir minha data.`;

    window.open(linkWhatsapp(mensagem), '_blank', 'noopener');
  });
}
