// Menu data
const menuItems = [
    {
        id: 1,
        name: "HAMBÚRGUER CLÁSSICO",
        description: "Hambúrguer artesanal, queijo, alface, tomate e molho especial",
        price: 25.00,
        image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Hambúrguer+Clássico"
    },
    {
        id: 2,
        name: "HAMBÚRGUER DUPLO",
        description: "Dois hambúrgueres artesanais, queijo cheddar, bacon e molho especial",
        price: 32.00,
        image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Hambúrguer+Duplo"
    },
    {
        id: 3,
        name: "HAMBÚRGUER VEGETARIANO",
        description: "Hambúrguer de grão de bico, queijo, alface, tomate e molho especial",
        price: 28.00,
        image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Hambúrguer+Vegetariano"
    },
    {
        id: 4,
        name: "BATATA FRITA",
        description: "Porção de batata frita crocante",
        price: 15.00,
        image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Batata+Frita"
    }
];

// Cart array to store selected items
let cart = [];

// Contador de pedidos do dia (armazenado no localStorage)
let orderCounter = 0;

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

// Initialize the menu
function initializeMenu() {
    menuItems.forEach(item => {
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

    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
    
    // Inicializa o contador de pedidos
    initializeOrderCounter();
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

// Update cart display
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
    
    // Format order for WhatsApp
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let orderMessage = `*Novo Pedido #${orderCounter} - ${today} - Garage's Burguer*\n\n`;
    orderMessage += `*Itens do Pedido:*\n`;
    
    cart.forEach(item => {
        orderMessage += `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    orderMessage += `\n*Total: R$ ${total.toFixed(2)}*\n\n`;
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
    updateCart();
    cartModal.style.display = 'none';
    showNotification('Pedido enviado com sucesso!');
});

// Initialize the menu when the page loads
document.addEventListener('DOMContentLoaded', initializeMenu);