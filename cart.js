// Menu data
const menuItems = [
    {
        id: 1,
        name: "THE KIDS",
        description: "Pão de brioche selado na manteiga, molho especial, hambúrguer artesanal de 90g e cheddar",	
        price: 14.99,
        image: "https://img.deliverydireto.com.br/unsafe/origxorig/https://duisktnou8b89.cloudfront.net/img/items/661850c7a2ac8.jpeg",
        category: "artesanais"
    },
    {
        id: 2,
        name: "CHEESE SALAD",
        description: "Pão de brioche selado na manteiga, molho especial, hambúrguer artesanal de 90g, queijo prato, tomate, alface e cebola roxa",	
        price: 18.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb39Ld-42Iqc5SRcOCLo_3hPaf5Q6_HyL0kw&s",
        category: "artesanais"
    },
    {
        id: 3,
        name: "CHEESE BACON",
        description: "Pão de brioche selado na manteiga, molho especial, hambúrguer artesanal de 90g, chedar, bacon e cebola roxa",	
        price: 21.99,
        image: "https://www.maiorviagem.net/wp-content/uploads/2022/05/Lala-Rock-Doma-House-Cre%CC%81dito-Lipe-Borges-2-2-1024x683.jpg",
        category: "artesanais"
    },
    {
        id: 4,
        name: "THE EGG",
        description: "Pão de brioche selado na manteiga, molho especial, hambúrguer artesanal de 90g, quejo prato, ovo, tomate e cebola roxa",	
        price: 19.99,
        image: "https://www.maiorviagem.net/wp-content/uploads/2022/05/Classico-Beach-Club-Ipanema_Hamburguer-Du-Chef_credito-Tais-Barros-681x1024.jpg",
        category: "artesanais"
    },

    {
        id:5,
        name:"CHEESE CHICKEN",
        description:"Pão de brioche selado na manteita, molho especial, filé de frango, queijo prato e cebola roxa",
        price:18.99,
        image:"https://cdn.neemo.com.br/uploads/item/photo/2551473/photo1713573761.jpeg.webp",
        category: "artesanais"
    },
    // {
    //     id:,
    //     name:"",
    //     description:"",
    //     price: ,
    //     image:"",
    //     category: ""
    // },

    {
        id:6,
        name:"PEPPERONI",
        description:"Pão de brioche selado na manteiga, molho especial, hambúrguer artesanal de 90g, fatias de calabresa, catupiry e cebola roxa",	
        price:22.90,
        image:"https://fontedenoticias.com.br/wp-content/uploads/2024/06/Festival-Burger-Time-2024-goiania-e-aparecida-scaled.jpg",
        category: "artesanais"
    },

    {
      id: 7,
      name:"DOUBLE BURGER",
      description:"Pão de brioche selado na manteiga, molho especial, 2 hamburgueres artesanais de 90g, cheddar e cebola roxa",
      price: 24.99,
      image:"https://media-cdn.tripadvisor.com/media/photo-s/1b/b6/b2/fb/original-pao-brioche.jpg",
      category: "artesanais"
    },

    {
        id:8,
        name:"THE FABULOUS",
        description:"Pão de brioche selado na manteiga, molho especial, hambúrguer artesanal de 120g, bacon, catupiry, molho sweet chilli e cebola caramelizada",
        price:27.99,
        image:"https://osaboroso.com.br/wp-content/uploads/2023/09/PAO-BRIOCHEBARBECUEHAMBURGER-ARTESANAL-150-GCEBOLA-CARAMELIZADABACONMAIONESE-VERDE.jpg",
        category: "artesanais"
    },

     {
        id:9,
        name:"PORÇÃO DE BATATA FRITA",
        description:"Porção de batata frita - 300g, com cheddar e bacon.",
        price:21.99,
        image:"https://img.cybercook.com.br/imagens/receitas/67/batata-frita-com-cheddar-e-bacon.jpg",
        category: "artesanais"
    },

     {
         id:10,
         name:"X-BURGER",
         description:"Pão tradicional, maionese, hambúrguer de 56g, queijo, presunto e batata palha.",
         price:10.00 ,
         image:"https://static.expressodelivery.com.br/imagens/produtos/336435/180/Expresso-Delivery_293ce72df8c06b68ab11f41d69bfac60.png",
         category: "tradicionais"
     },

     {
         id:11,
         name:"X-SALADA",
         description:"Pão tradicional, maionese, hambúrguer de 56g, queijo, tomate, alface, milho e batata palha.",
         price:13.00 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHky6Ie7gNZW5q6tCmMknnWhmSwhJTmi9t8A&s",
         category: "tradicionais"
     },

     {
         id:12,
         name:"X-EGG",
         description:"Pão tradicional, maionese, hambúrguer de 56g, ovo, tomate, quejo, alface e batata palha.",
         price:14.00 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQqZnd_5TNdE4qS76HF8JpVPGwECrvcvkqQ&s",
         category: "tradicionais"
     },

      {
         id:13,
         name:"X-FRANGO",
         description:"Pão tradicional, maionese, hambúrguer de 56g, frango,  quejo, alface e batata palha.",
         price:16.00 ,
         image:"https://cardapei.com.br/uploads/images/2023/05/3-1.png",
         category: "tradicionais"
     },

      {
         id:14,
         name:"X-CALABRESA",
         description:"Pão tradicional, maionese, hambúrguer de 56g, calabresa,  cebola roxa e batata palha.",
         price:15.00 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVrNEi_WC4WOhwRbwvpzUIdsCnuv6JonVAuUG3zoDkjb92xbmkpxGFSr4MLUyyj1gaBQ&usqp=CAU",
         category: "tradicionais"
     },

     {
         id:15,
         name:"X-BACON",
         description:"Pão tradicional, maionese, hambúrguer de 56g, bacon, queijo, cebola roxa e batata palha.",
         price:17.00 ,
         image:"https://hamburguer.zapdeliveries.com.br/_core/_uploads/165/2023/11/1225081123iae4gf86ei.jpg",
         category: "tradicionais"
     },

     {
         id:16,
         name:"CALAFRANGO",
         description:"Filé de frango, calabresa, queijo, milho, alface, cebola roxa e batata palha.",
         price:18.00 ,
         image:"https://classiclanches.com.br/wp-content/uploads/2023/08/X-FRANGO-CALABRESA.png",
         category: "tradicionais"
     },


      {
         id:17,
         name:"COMBO 1",
         description:"3 X-Burguer tradicional + batata frita 150g.",
         price:29.90 ,
         image:"https://storage.googleapis.com/prod-cardapio-web/uploads/item/image/1049334/822d2bbdWhatsApp_Image_2024-08-13_at_14.01.08__1_.jpeg",
         category: "combos"
     },


     {
         id:18,
         name:"COMBO 2",
         description:"4 X-Burguer tradicional + batata frita 150g.",
         price:38.90 ,
         image:"https://storage.googleapis.com/prod-cardapio-web/uploads/item/image/1180811/d00327fdWhatsApp_Image_2024-08-13_at_14.06.40__1_.jpeg",
         category: "combos"
     },

    
     
      {
         id:20,
         name:"COMBO 4",
         description:"4 X-Salada tradicional + batata frita 150g.",
         price:54.90 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XbnOHuleAUKbxw-gPIXIUNxhk68TsriXMA&s",
         category: "combos"
     },

        {
         id:21,
         name:"COMBO 5",
         description:"3 X-Calabresa tradicional + batata frita 150g.",
         price:47.90 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XbnOHuleAUKbxw-gPIXIUNxhk68TsriXMA&s",
         category: "combos"
     },

     {
         id:22,
         name:"COMBO 6",
         description:"4 X-Calabresa tradicional + batata frita 150g.",
         price:61.90 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XbnOHuleAUKbxw-gPIXIUNxhk68TsriXMA&s",
         category: "combos"
     },

     {
         id:23,
         name:"COMBO 7",
         description:"2 X-Salada tradicional + batata frita 150g +1 Guarana Antarctica 1L.",
         price:38.90 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XbnOHuleAUKbxw-gPIXIUNxhk68TsriXMA&s",
         category: "combos"
     },

     {
         id:24,
         name:"COMBO 8",
         description:"3 X-Bacon tradicional + batata frita 150g.",
         price:54.90 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XbnOHuleAUKbxw-gPIXIUNxhk68TsriXMA&s",
         category: "combos"
     },

      {
         id:24,
         name:"COMBO 8",
         description:"3 X-Bacon tradicional + batata frita 150g.",
         price:54.90 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XbnOHuleAUKbxw-gPIXIUNxhk68TsriXMA&s",
         category: "combos"
     },
     
        {
         id:25,
         name:"COMBO 9",
         description:"4 X-Bacon tradicional + batata frita 150g.",
         price:69.90 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XbnOHuleAUKbxw-gPIXIUNxhk68TsriXMA&s",
         category: "combos"
     },

        {
         id:26,
         name:"COMBO 10",
         description:"3 X-Egg tradicional + batata frita 150g.",
         price:45.90 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XbnOHuleAUKbxw-gPIXIUNxhk68TsriXMA&s",
         category: "combos"
     },

      {
         id:27,
         name:"COMBO 11",
         description:"4 X-Egg tradicional + batata frita 150g.",
         price:59.90 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XbnOHuleAUKbxw-gPIXIUNxhk68TsriXMA&s",
         category: "combos"
     },

     {
         id:28,
         name:"COMBO BACON",
         description:"Hamburguer artesanal.",
         price:21.90 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XbnOHuleAUKbxw-gPIXIUNxhk68TsriXMA&s",
         category: "combos"
     },

     {
         id:29,
         name:"COMBO SALADÃO",
         description:"Hamburguer artesanal.",
         price:19.90 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XbnOHuleAUKbxw-gPIXIUNxhk68TsriXMA&s",
         category: "combos"
     },

     {
         id:30,
         name:"COMBO CALAFRANGO",
         description:"Batata frita 150g + refrigerante lata.",
         price:28.90 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XbnOHuleAUKbxw-gPIXIUNxhk68TsriXMA&s",
         category: "combos"
     },

         {
         id:31,
         name:"SUPER COMBO",
         description:"8 X-Salada + Fritas c/ cheddar e bacon + Refrigerante 2L.",
         price:119.90 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XbnOHuleAUKbxw-gPIXIUNxhk68TsriXMA&s",
         category: "combos"
     },

      {
         id:32,
         name:"SKOL ",
         description:"Lata 350ml.",
         price:6.00 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0mQtYDeY9OD3Rmg8BrWXvH2Xz4W_gmDJDDg&s",
         category: "bebidas"
     },
     
      {
         id:33,
         name:"IMPÉRIO ",
         description:"Lata 350ml.",
         price:6.00 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8tkk3DWv5HxsbC6G4HnayqO_-w3oQrhYIw&s",
         category: "bebidas"
     },

     {
         id:34,
         name:"SUCO ",
         description:"Lata 350ml.",
         price:6.00 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmBCK0B_UVR848_7KaKTG071mRXnaKJMGTA&s",
         category: "bebidas"
     },
    
      {
         id:35,
         name:"COCA-COLA ",
         description:"Lata 350ml.",
         price:6.00 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Eket6jPD5X4rzzTjaP84cahTFglImT6O0Q&s",
         category: "bebidas"
     },
     

      {
         id:36,
         name:"GUARANA ",
         description:"Lata 350ml.",
         price:6.00 ,
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8s_OnUpTjIZ2CgTkEwEzhEzD7yb2PugOf4g&s",
         category: "bebidas"
     },
];

// Cart array to store selected items
let cart = [];

// Contador de pedidos do dia (armazenado no localStorage)
let orderCounter = 0;

// Current active category
let activeCategory = 'all';

// DOM Elements
const menuItemsContainer = document.getElementById('menu-items');
const cartModal = document.getElementById('cart-modal');
const cartIcon = document.getElementById('cart-icon');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const paymentOptions = document.querySelectorAll('input[name="payment"]');
const changeContainer = document.getElementById('change-container');
const changeAmount = document.getElementById('change-amount');
const categoryTabs = document.querySelectorAll('.category-tab');

// Initialize the menu
function initializeMenu() {
    // Adiciona event listeners para as abas de categoria
    if (categoryTabs) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove a classe active de todas as abas
                categoryTabs.forEach(t => t.classList.remove('active'));
                // Adiciona a classe active à aba clicada
                tab.classList.add('active');
                // Atualiza a categoria ativa
                activeCategory = tab.getAttribute('data-category');
                // Atualiza a exibição do menu
                displayMenuItems();
            });
        });
    }
    
    // Exibe os itens do menu
    displayMenuItems();
    
    // Inicializa o contador de pedidos
    initializeOrderCounter();
}

// Exibe os itens do menu com base na categoria ativa
function displayMenuItems() {
    // Limpa o container do menu
    menuItemsContainer.innerHTML = '';
    
    // Filtra os itens com base na categoria ativa
    const filteredItems = activeCategory === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === activeCategory);
    
    // Exibe os itens filtrados
    filteredItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';
        menuItemElement.innerHTML = `
            <div class="menu-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="menu-item-price">R$ ${item.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${item.id}">Adicionar ao Pedido</button>
        `;
        menuItemsContainer.appendChild(menuItemElement);
    });

    // Adiciona event listeners aos botões "Adicionar ao Pedido"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Inicializa o contador de pedidos do dia
function initializeOrderCounter() {
    const today = new Date().toLocaleDateString('pt-BR');
    const savedDate = localStorage.getItem('orderDate');
    
    if (savedDate === today) {
        // Se for o mesmo dia, continua a contagem
        orderCounter = parseInt(localStorage.getItem('orderCounter') || '0');
    } else {
        // Se for um novo dia, reinicia a contagem
        orderCounter = 0;
        localStorage.setItem('orderDate', today);
        localStorage.setItem('orderCounter', orderCounter.toString());
    }
}

// Add item to cart
function addToCart(event) {
    const itemId = parseInt(event.target.getAttribute('data-id'));
    const selectedItem = menuItems.find(item => item.id === itemId);
    
    // Check if item is already in cart
    const existingItemIndex = cart.findIndex(item => item.id === itemId);
    
    if (existingItemIndex !== -1) {
        // Item already in cart, increase quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // Add new item to cart
        cart.push({
            ...selectedItem,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${selectedItem.name} adicionado ao pedido!`);
}

function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    
    // Update cart items
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="color: white; text-align: center;">Seu carrinho está vazio</p>';
    } else {
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">R$ ${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    <button class="quantity-btn remove" data-id="${item.id}">🗑️</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
            button.addEventListener('click', decreaseQuantity);
        });
        
        document.querySelectorAll('.quantity-btn.increase').forEach(button => {
            button.addEventListener('click', increaseQuantity);
        });
        
        document.querySelectorAll('.quantity-btn.remove').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = total.toFixed(2);
}

// Decrease item quantity
function decreaseQuantity(event) {
    const itemId = parseInt(event.target.getAttribute('data-id'));
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity -= 1;
    } else {
        cart.splice(itemIndex, 1);
    }
    
    updateCart();
}

// Increase item quantity
function increaseQuantity(event) {
    const itemId = parseInt(event.target.getAttribute('data-id'));
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    cart[itemIndex].quantity += 1;
    updateCart();
}

// Remove item from cart
function removeItem(event) {
    const itemId = parseInt(event.target.getAttribute('data-id'));
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    cart.splice(itemIndex, 1);
    updateCart();
}

// Show notification
function showNotification(message) {
    // Check if notification already exists
    let notification = document.querySelector('.notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Event Listeners
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
    updateCartModal(); // Chama a função que inclui adicionais e observações
});

closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Close modal when clicking outside
cartModal.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Toggle change amount input based on payment method
paymentOptions.forEach(option => {
    option.addEventListener('change', () => {
        if (option.value === 'cash') {
            changeContainer.style.display = 'flex';
        } else {
            changeContainer.style.display = 'none';
        }
    });
});

// Checkout button
checkoutBtn.addEventListener('click', () => {
    const customerName = document.getElementById('customer-name').value;
    const customerAddress = document.getElementById('customer-address').value;
    const customerPhone = document.getElementById('customer-phone').value;
    
    if (!customerName || !customerAddress || !customerPhone) {
        showNotification('Por favor, preencha todos os dados para entrega');
        return;
    }
    
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio');
        return;
    }
    
    // Get selected payment method
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    let changeFor = '';
    
    if (paymentMethod === 'cash') {
        changeFor = changeAmount.value;
        if (!changeFor) {
            showNotification('Por favor, informe o valor para troco');
            return;
        }
    }
    
    // Incrementa o contador de pedidos
    orderCounter++;
    localStorage.setItem('orderCounter', orderCounter.toString());
    
    // Obtém a data atual formatada
    const today = new Date().toLocaleDateString('pt-BR');
    
    // Obtém a observação do pedido
    const observation = document.getElementById('order-observation') ? document.getElementById('order-observation').value : '';
    
    // Calcula o total incluindo os adicionais
    const itemsTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const additionalsTotal = selectedAdditionals.reduce((sum, item) => sum + item.price, 0);
    const total = itemsTotal + additionalsTotal;
    
    let orderMessage = `*Novo Pedido #${orderCounter} - ${today} - Garage's Burguer*\n\n`;
    orderMessage += `*Itens do Pedido:*\n`;
    
    // Adiciona os itens do carrinho
    cart.forEach(item => {
        orderMessage += `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    // Adiciona os adicionais selecionados
    if (selectedAdditionals.length > 0) {
        orderMessage += `\n*Adicionais:*\n`;
        selectedAdditionals.forEach(additional => {
            orderMessage += `1x ${additional.name} - R$ ${additional.price.toFixed(2)}\n`;
        });
    }
    
    orderMessage += `\n*Total: R$ ${total.toFixed(2)}*\n\n`;
    
    // Adiciona as observações, se houver
    if (observation && observation.trim() !== '') {
        orderMessage += `*Observações:*\n${observation}\n\n`;
    }
    
    orderMessage += `*Dados para Entrega:*\n`;
    orderMessage += `Nome: ${customerName}\n`;
    orderMessage += `Endereço: ${customerAddress}\n`;
    orderMessage += `Telefone: ${customerPhone}\n\n`;
    orderMessage += `*Forma de Pagamento:* ${paymentMethod === 'pix' ? 'PIX' : paymentMethod === 'card' ? 'Cartão (na entrega)' : 'Dinheiro (na entrega)'}`;
    
    if (paymentMethod === 'cash' && changeFor) {
        orderMessage += `\nTroco para: R$ ${changeFor}`;
    }
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappNumber = '5513992104440'; // Substitua pelo seu número
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp with the order
    window.open(whatsappURL, '_blank');
    
    // Clear cart after order
    cart = [];
    selectedAdditionals = []; // Limpa também os adicionais
    updateCart();
    cartModal.style.display = 'none';
    showNotification('Pedido enviado com sucesso!');
});

// Initialize the menu when the page loads
document.addEventListener('DOMContentLoaded', initializeMenu);

// Adicionais disponíveis
const additionalItems = [
    { id: 'ovo', name: 'Ovo', price: 2.00 },
    { id: 'hamburguerArtesanal', name: 'Hambúrguer Artesanal', price: 5.00 },
    { id: 'hamburguerTradicional', name: 'Hambúrguer Tradicional', price: 2.50 },
    { id: 'catupiry', name: 'Catupiry', price: 4.00 },
    { id: 'queijo', name: 'Queijo', price: 2.00 },
    { id: 'cheddar', name: 'Cheddar', price: 4.00 },
    { id: 'bacon', name: 'Bacon', price: 4.00 },
    { id: 'calabresa', name: 'Calabresa', price: 3.00 },
    { id: 'batataFrita', name: 'Batata Frita', price: 7.00 },
    { id: 'onionRings', name: 'Onion Rings', price: 3.00 },
    { id: 'pastaDeAlho', name: 'Pasta de Alho Pequeno', price: 4.00 }
];

// Array para armazenar adicionais selecionados
let selectedAdditionals = [];

// Modifique a função updateCartModal para incluir os adicionais e campo de observação
function updateCartModal() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
        cartTotalElement.textContent = 'R$ 0.00';
        return;
    }
    
    // Adiciona os itens do carrinho
    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-info">
                <h3 class="cart-item-title">${item.name}</h3>
                <p class="cart-item-price">R$ ${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn decrease" data-index="${index}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn increase" data-index="${index}">+</button>
                <button class="remove-btn" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemElement);
        
        total += item.price * item.quantity;
    });
    
    // Adiciona os adicionais selecionados
    selectedAdditionals.forEach((additional, index) => {
        const additionalElement = document.createElement('div');
        additionalElement.className = 'cart-item additional-item';
        additionalElement.innerHTML = `
            <div class="cart-item-info">
                <h3 class="cart-item-title">${additional.name} (Adicional)</h3>
                <p class="cart-item-price">R$ ${additional.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="remove-additional-btn" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(additionalElement);
        
        total += additional.price;
    });
    
    // Adiciona a seção de adicionais
    const additionalsSection = document.createElement('div');
    additionalsSection.className = 'additionals-section';
    additionalsSection.innerHTML = `
        <h3>Adicionais</h3>
        <div class="additionals-grid">
            ${additionalItems.map(item => `
                <div class="additional-item">
                    <input type="checkbox" id="${item.id}" class="additional-checkbox" data-name="${item.name}" data-price="${item.price}">
                    <label for="${item.id}">${item.name} - R$ ${item.price.toFixed(2)}</label>
                </div>
            `).join('')}
        </div>
    `;
    cartItemsContainer.appendChild(additionalsSection);
    
    // Adiciona o campo de observação
    const observationSection = document.createElement('div');
    observationSection.className = 'observation-section';
    observationSection.innerHTML = `
        <h3>Observações</h3>
        <textarea id="order-observation" placeholder="Alguma observação para o seu pedido? Ex: Sem cebola, bem passado, etc."></textarea>
    `;
    cartItemsContainer.appendChild(observationSection);
    
    // Atualiza o total
    total = calculateTotal();
    cartTotalElement.textContent = `R$ ${total.toFixed(2)}`;
    
    // Adiciona event listeners para os botões de quantidade
    const decreaseButtons = document.querySelectorAll('.quantity-btn.decrease');
    const increaseButtons = document.querySelectorAll('.quantity-btn.increase');
    const removeButtons = document.querySelectorAll('.remove-btn');
    const removeAdditionalButtons = document.querySelectorAll('.remove-additional-btn');
    const additionalCheckboxes = document.querySelectorAll('.additional-checkbox');
    
    decreaseButtons.forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    
    increaseButtons.forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    
    removeButtons.forEach(button => {
        button.addEventListener('click', removeItem);
    });
    
    removeAdditionalButtons.forEach(button => {
        button.addEventListener('click', removeAdditional);
    });
    
    additionalCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', toggleAdditional);
    });
    
    // Marca os checkboxes dos adicionais já selecionados
    selectedAdditionals.forEach(additional => {
        const checkbox = document.getElementById(additional.id);
        if (checkbox) checkbox.checked = true;
    });
}

// Função para calcular o total (itens + adicionais)
function calculateTotal() {
    let total = 0;
    
    // Soma os itens do carrinho
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    
    // Soma os adicionais
    selectedAdditionals.forEach(additional => {
        total += additional.price;
    });
    
    return total;
}

// Função para adicionar/remover adicionais
function toggleAdditional(event) {
    const checkbox = event.target;
    const id = checkbox.id;
    const name = checkbox.getAttribute('data-name');
    const price = parseFloat(checkbox.getAttribute('data-price'));
    
    if (checkbox.checked) {
        // Adiciona o adicional à lista
        selectedAdditionals.push({ id, name, price });
    } else {
        // Remove o adicional da lista
        const index = selectedAdditionals.findIndex(item => item.id === id);
        if (index !== -1) {
            selectedAdditionals.splice(index, 1);
        }
    }
    
    updateCartModal();
}

// Função para remover um adicional
function removeAdditional(event) {
    const button = event.target.closest('.remove-additional-btn');
    const index = parseInt(button.getAttribute('data-index'));
    selectedAdditionals.splice(index, 1);
    updateCartModal();
}

// Função para obter o nome do método de pagamento
function getPaymentMethodName(method) {
    switch (method) {
        case 'credit':
            return 'Cartão de Crédito';
        case 'debit':
            return 'Cartão de Débito';
        case 'pix':
            return 'PIX';
        case 'money':
            return 'Dinheiro';
        default:
            return method;
    }
}
