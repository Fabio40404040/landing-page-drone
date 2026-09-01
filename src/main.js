import '@fontsource/space-grotesk/latin-500.css';
import '@fontsource/space-grotesk/latin-600.css';
import '@fontsource/space-grotesk/latin-700.css';
import '@fontsource/ibm-plex-sans/latin-400.css';
import '@fontsource/ibm-plex-sans/latin-500.css';
import '@fontsource/ibm-plex-sans/latin-600.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';
import './style.css';

import { renderServicos } from './sections/servicos.js';
import { renderPagamento, initPagamento } from './sections/pagamento.js';
import { wireWhatsappLinks } from './sections/whatsapp.js';
import { initSmoothScroll } from './utils/smoothScroll.js';
import { initAgendamento } from './sections/agendamento.js';
import { initOrcamentoServico } from './sections/orcamentoServico.js';
import { initMenuMobile } from './sections/menuMobile.js';

renderServicos();
renderPagamento();
wireWhatsappLinks();
initSmoothScroll();
initPagamento();
initAgendamento();
initOrcamentoServico();
initMenuMobile();
