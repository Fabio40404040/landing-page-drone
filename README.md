# Voa Serviços Aéreos — Landing page

Landing page de serviços de drone, feita em Vite + JavaScript puro (sem framework).

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Antes de publicar

1. **`src/data/config.js`** — troque `whatsappNumero`, `telefoneExibicao`, `cidade`, `instagram` e `email` pelos dados reais do negócio.
2. **`src/data/servicos.js`** — ajuste títulos e descrições dos serviços conforme os nichos realmente atendidos.
3. **`src/assets/images/`** — os ícones e a foto do piloto são ilustrações em SVG (placeholder). Troque `piloto.svg` por uma foto real (jpg/png) da pessoa responsável e ajuste o `import` em `src/sections/sobre.js`.
4. **`public/favicon.svg`** — pode trocar pela logo real da marca.

## Build para produção

```bash
npm run build
```

Gera a pasta `dist/`, pronta para subir em qualquer hospedagem estática (Vercel, Netlify, etc.).

## Estrutura

```
src/
├── main.js            # importa o CSS e inicializa todas as seções
├── style.css           # estilos globais
├── data/
│   ├── config.js       # dados do negócio + gerador de link do WhatsApp
│   └── servicos.js     # lista de serviços por nicho
├── sections/            # cada seção da página (header, hero, servicos, sobre, contato, footer)
├── utils/
│   └── smoothScroll.js
└── assets/images/       # ícones e ilustrações SVG
```

## Sobre os pagamentos

Como o negócio é baseado em atendimento por WhatsApp (sem carrinho de compras), o rodapé
oferece 3 formas de pagamento — cartão, Pix ou dinheiro — todas presenciais, no dia do
serviço. Cada botão abre o WhatsApp já com uma mensagem indicando a forma escolhida.
