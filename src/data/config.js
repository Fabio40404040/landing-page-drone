// Dados gerais do negócio.
// Troque os valores abaixo pelos dados reais da empresa.
export const config = {
  nomeEmpresa: 'Voa Serviços Aéreos',
  slogan: 'Drone profissional para o seu negócio decolar',
  cidade: 'Iguatu, CE',
  cnpj: '00.000.000/0001-00',
  telefoneExibicao: '(88) 90000-0000',
  // Número do WhatsApp no formato internacional, só dígitos (DDI+DDD+número).
  whatsappNumero: '5588900000000',
  instagram: '@voaservicosaereos',
  email: 'contato@voaservicosaereos.com.br'
};

// Monta um link do WhatsApp já com a mensagem preenchida.
export function linkWhatsapp(mensagem) {
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${config.whatsappNumero}?text=${texto}`;
}
