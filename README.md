
# Convite Online - Confirmação via WhatsApp

Projeto simples de convite digital para eventos com confirmação de presença via WhatsApp. Permite que os convidados confirmem sua presença preenchendo o nome em um formulário, que abre o WhatsApp com uma mensagem pronta para envio.

---

## Funcionalidades

- Formulário para confirmação de presença (nome).
- Envio da confirmação para um número do WhatsApp via link `wa.me`.
- Layout responsivo, adaptado para celular, tablet e desktop.
- Link para localização do evento no Google Maps.

---

## Tecnologias Utilizadas

- HTML5
- CSS3 (com Flexbox e Media Queries para responsividade)
- JavaScript (para captura de dados e abertura do WhatsApp)

---

## Como usar

1. Abra o arquivo `index.html` em qualquer navegador moderno.
2. Preencha seu nome no campo do formulário.
3. Clique em "Confirmar Presença via WhatsApp".
4. O WhatsApp (app móvel ou web) será aberto com a mensagem pronta para envio.
5. Envie a mensagem para confirmar sua presença.

---

## Personalização

- **Número de WhatsApp:** altere o valor da variável `numero` no arquivo `script.js` para o número que deve receber as confirmações, no formato internacional (ex: `5511987654321`).
- **Texto do convite:** modifique o conteúdo do HTML para personalizar o texto do convite e detalhes do evento.
- **Imagem de fundo:** substitua o arquivo `img/emylly.jpg` pela imagem desejada e ajuste o caminho no `style.css`.

---

## Estrutura do Projeto

```
/convite-online
│
├── index.html
├── style.css
├── script.js
└── img/
    └── emylly.jpg
```

---

## Contato

Para dúvidas ou sugestões, entre em contato:  
**Email:** seuemail@exemplo.com  
**Telefone/WhatsApp:** +55 88 999999999

---

## Licença

Este projeto está disponível sob a licença MIT.
