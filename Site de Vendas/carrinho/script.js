// script.js
const cartItems = [
    { id: 1, name: 'Produto A', price: 50.00, quantity: 2, imageUrl: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Produto B', price: 30.00, quantity: 1, imageUrl: 'https://via.placeholder.com/50' },
];

function updateCart() {
    const cartTable = document.getElementById('cart-items');
    cartTable.innerHTML = ''; // Limpa os itens existentes
    let totalPrice = 0;

    cartItems.forEach(item => {
        const subtotal = item.price * item.quantity; // Calcula o subtotal
        totalPrice += subtotal; // Adiciona ao total

        const row = document.createElement('tr');
        row.innerHTML = `
            <!-- Exibe a imagem do produto -->
            <td><img src="${item.imageUrl}" alt="${item.name}"></td>  
            <!-- Nome do produto -->
            <td>${item.name}</td>  
            <!-- Preço -->
            <td>R$ ${item.price.toFixed(2)}</td>  
            <!-- Quantidade com botões -->
            <td style="display:flex; align-items:center;">
                <!-- Botões para alterar quantidade -->
                <button onclick="changeQuantity(${item.id}, -1)">-</button> ${item.quantity} 
                <!-- Botão para aumentar quantidade -->
                <button onclick="changeQuantity(${item.id}, 1)">+</button>  
            </td>  
            <!-- Subtotal -->
            <td>R$ ${subtotal.toFixed(2)}</td>  
            <!-- Botão de remover -->
            <td><button onclick="removeFromCart(${item.id})">Remover</button></td>  
        `;
        cartTable.appendChild(row);
    });

    document.getElementById('total-price').innerText = totalPrice.toFixed(2); // Atualiza o total
}

function changeQuantity(id, delta) {
    const item = cartItems.find(item => item.id === id);
    
	if (item) {
        item.quantity += delta; // Altera a quantidade
        if (item.quantity <= 0) {
            removeFromCart(id); // Remove o item se a quantidade for zero ou negativa
        } else {
            updateCart(); // Atualiza o carrinho
        }
	}
}

function removeFromCart(id) {
    const index = cartItems.findIndex(item => item.id === id);
    
	if (index > -1) {
        cartItems.splice(index, 1); // Remove o item do carrinho
        updateCart(); // Atualiza o carrinho
	}
}

// Inicializa o carrinho ao carregar a página
updateCart();