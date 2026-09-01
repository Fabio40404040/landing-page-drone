// Dados gerais do negócio.
// Troque os valores abaixo pelos dados reais da empresa.
export const config = {
  nomeEmpresa: 'Voa Leyanne',
  slogan: 'Drone profissional para o seu negócio decolar',
  cidade: 'Iguatu, CE',
  telefoneExibicao: '(88) 99614-2074',
  // Número do WhatsApp no formato internacional, só dígitos (DDI+DDD+número).
  whatsappNumero: '5588996142074',
  instagram: '@voaservicosaereos',
  instagramUrl: 'https://www.instagram.com/voacomleyanne/',
  email: 'leyanne34@gmail.com',
  taxaCancelamento: '20%'   // porcentagem retida em caso de desistência após o adiantamento
};

// Monta um link do WhatsApp já com a mensagem preenchida.
export function linkWhatsapp(mensagem) {
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${config.whatsappNumero}?text=${texto}`;
}
