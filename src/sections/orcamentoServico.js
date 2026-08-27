export function initOrcamentoServico() {
  const botaoAgendar = document.getElementById('btn-agendar');

  document.querySelectorAll('.js-orcamento-servico').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const servico = link.dataset.servico;

      if (botaoAgendar && servico) {
        botaoAgendar.dataset.msgBase = `Olá! Quero pedir um orçamento para o serviço de "${servico}".`;
      }

      const contato = document.getElementById('contato');
      contato?.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Leva o foco pro campo de data, já que a pessoa provavelmente quer escolher uma.
      setTimeout(() => {
        document.getElementById('data-agendamento')?.focus();
      }, 500);
    });
  });
}