// Todo atalho de WhatsApp passa primeiro pelo agendamento e pagamento.
export function wireWhatsappLinks() {
  document.querySelectorAll('.js-whatsapp').forEach((link) => {
    link.href = '#contato';

    link.addEventListener('click', (event) => {
      event.preventDefault();

      const botaoAgendar = document.getElementById('btn-agendar');
      const mensagem = link.dataset.msg || 'Olá! Vim pelo site e quero saber mais sobre os serviços de drone.';
      if (botaoAgendar) {
        botaoAgendar.dataset.msgBase = mensagem;
        delete botaoAgendar.dataset.servico;
      }

      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        document.getElementById('data-agendamento')?.focus();
      }, 500);
    });
  });
}
