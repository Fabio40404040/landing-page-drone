import './style.css';

import { renderServicos } from './sections/servicos.js';
import { renderPagamento, initPagamento } from './sections/pagamento.js';
import { wireWhatsappLinks } from './sections/whatsapp.js';
import { initSmoothScroll } from './utils/smoothScroll.js';
import { initAgendamento } from './sections/agendamento.js';
import { initOrcamentoServico } from './sections/orcamentoServico.js';

renderServicos();
renderPagamento();
wireWhatsappLinks();
initSmoothScroll();
initPagamento();
initAgendamento();
initOrcamentoServico();
