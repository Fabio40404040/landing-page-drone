import iconeAgro from '../assets/images/icon-agro.svg';
import iconeImoveis from '../assets/images/icon-imoveis.svg';
import iconeEventos from '../assets/images/icon-eventos.svg';
import iconeInspecao from '../assets/images/icon-inspecao.svg';
import iconeMapeamento from '../assets/images/icon-mapeamento.svg';

export const servicos = [
  {
    nicho: 'Agricultura',
    titulo: 'Agricultura de precisão',
    descricao: 'Mapeamento de talhões, monitoramento de plantio e pulverização com precisão para reduzir custo e desperdício.',
    icone: iconeAgro
  },
  {
    nicho: 'Imobiliário',
    titulo: 'Fotos e vídeos aéreos',
    descricao: 'Imagens aéreas de alta resolução para valorizar imóveis, empreendimentos e loteamentos nos anúncios.',
    icone: iconeImoveis
  },
  {
    nicho: 'Eventos',
    titulo: 'Cobertura aérea de eventos',
    descricao: 'Registro em foto e vídeo de casamentos, shows, formaturas e eventos corporativos com tomadas exclusivas.',
    icone: iconeEventos
  },
  {
    nicho: 'Inspeção industrial',
    titulo: 'Inspeção de estruturas',
    descricao: 'Vistoria de telhados, torres, linhas de transmissão e fachadas, sem colocar pessoas em risco de altura.',
    icone: iconeInspecao
  },
  {
    nicho: 'Mapeamento',
    titulo: 'Topografia e mapeamento',
    descricao: 'Levantamento aerofotogramétrico, curvas de nível e ortomosaicos para projetos de engenharia e obras.',
    icone: iconeMapeamento
  }
];
