// Dados gerais do negócio.
// Troque os valores abaixo pelos dados reais da empresa.
export const config = {
  nomeEmpresa: 'Voa Serviços Aéreos',
  slogan: 'Drone profissional para o seu negócio decolar',
  cidade: 'Iguatu, CE',
  cnpj: '00.000.000/0001-00',
  telefoneExibicao: '(88) 99614-2074',
  // Número do WhatsApp no formato internacional, só dígitos (DDI+DDD+número).
  whatsappNumero: '5588999523807',
  instagram: '@voaservicosaereos',
  instagramUrl: 'https://instagram.com/_anneley_benicioinovacao',
  email: 'gmail.com',
  taxaCancelamento: '20%'   // porcentagem retida em caso de desistência após o adiantamento
};

// Monta um link do WhatsApp já com a mensagem preenchida.
export function linkWhatsapp(mensagem) {
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${config.whatsappNumero}?text=${texto}`;
}
