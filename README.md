# Site Garage's Burguer

Meu primeiro projeto comercial - Um site estático para uma hamburgueria focado na apresentação dos serviços e engajamento com clientes.

## 📋 Visão Geral

Este projeto é um site estático desenvolvido para o Garage's Burguer, apresentando um design limpo e atraente para mostrar o cardápio de hambúrgueres e facilitar o contato com os clientes. O site consiste em três páginas principais:

- Página Inicial
- Cardápio
- Contato

## 🎯 Objetivos Principais

- Apresentar os serviços da hamburgueria
- Exibir o cardápio de forma atraente
- Facilitar o acesso às informações de contato
- Incentivar o contato direto dos clientes

## 🌟 Características Principais

### Elementos de Design
- Design responsivo para todos os tamanhos de tela
- Fundos com gradientes personalizados
- Animações e transições suaves
- Efeitos interativos ao passar o mouse
- Identidade visual consistente em todas as páginas

### Destaques Técnicos
- Estrutura HTML semântica e limpa
- Animações CSS para melhor experiência do usuário
- Abordagem mobile-first
- Implementação de fontes personalizadas
- Imagens e layout otimizados

### Experiência do Usuário
- Navegação intuitiva
- Botões de ação claros
- Fácil acesso às informações de contato
- Apresentação visual atraente do cardápio
- Transições e rolagem suaves

## 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- Google Fonts
- Design Responsivo
- Layout com Flexbox/Grid

## 📱 Design Responsivo

O site é totalmente responsivo e otimizado para:
- Computadores
- Tablets
- Celulares

## 🎨 Características de Design

- Esquema de cores personalizado baseado na identidade da marca
- Elementos animados para melhor engajamento
- Tipografia otimizada para melhor leitura
- Espaçamento e layout consistentes

## 📞 Integração de Contato

- Link direto para telefone
- Link para perfil do Instagram
- Exibição do horário de funcionamento
- Informações de localização

## 🚀 Melhorias Futuras

- Adicionar sistema de pedidos online (esse já foi adicionado)
- Implementar seção de avaliações dos clientes
- Adicionar galeria de imagens
- Criar seção de blog para novidades

---

Este projeto representa meu primeiro passo no desenvolvimento web comercial, focando em criar uma presença online simples e efetiva para um negócio local.

## 🧑‍💻 Funcionamento do JavaScript

O projeto utiliza JavaScript para tornar o cardápio interativo e permitir que o usuário monte seu pedido de forma dinâmica. Veja como funciona cada parte:

### Estrutura dos Dados do Cardápio
- Os produtos do cardápio são armazenados em um array de objetos chamado `menuItems` no arquivo `cart.js`. Cada objeto contém informações como nome, descrição, preço, imagem e categoria.

### Exibição dos Produtos
- Ao carregar a página do cardápio, o JavaScript percorre o array `menuItems` e cria dinamicamente os elementos HTML para exibir cada produto na tela.
- O usuário pode filtrar os produtos por categoria (artesanais, tradicionais, combos, bebidas) clicando nas abas. O filtro é feito via JavaScript, sem recarregar a página.

### Carrinho de Compras
- O carrinho é um array que armazena os itens selecionados pelo usuário.
- Ao clicar em "Adicionar ao Pedido", o produto é incluído no carrinho. Se o produto já estiver no carrinho, sua quantidade é aumentada.
- O carrinho pode ser aberto a qualquer momento clicando no ícone. Nele, o usuário pode:
  - Aumentar ou diminuir a quantidade de cada item (+/-)
  - Remover itens
  - Adicionar observações e adicionais ao pedido
- O valor total do pedido é atualizado automaticamente conforme o usuário altera o carrinho.

### Finalização do Pedido
- Ao clicar em "Finalizar Pedido", o JavaScript valida os dados do cliente e do pedido.
- O pedido é formatado e enviado diretamente para o WhatsApp da hamburgueria, facilitando o contato e registro do pedido.
- Após o envio, o carrinho é limpo automaticamente.

### Integração com o HTML
- O JavaScript manipula o DOM para criar, atualizar e remover elementos conforme as ações do usuário.
- Todos os botões e campos do cardápio e do carrinho são controlados via eventos JavaScript, tornando a experiência fluida e sem recarregamento de página.

### Outras Funcionalidades
- O sistema armazena o número de pedidos do dia usando o `localStorage`, permitindo controle de pedidos diários.
- O código também gerencia métodos de pagamento e solicita troco quando necessário.

---

Essas funcionalidades tornam o site mais dinâmico e prático, proporcionando uma experiência moderna tanto para o cliente quanto para o dono da hamburgueria.
