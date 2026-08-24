import './style.css';

import { renderServicos } from './sections/servicos.js';
import { wireWhatsappLinks } from './sections/whatsapp.js';
import { initSmoothScroll } from './utils/smoothScroll.js';

renderServicos();     // gera os cards de serviço a partir de data/servicos.js
wireWhatsappLinks();  // preenche todos os links .js-whatsapp com o número certo
initSmoothScroll();   // rolagem suave para os links de âncora (#servicos, #sobre...)
