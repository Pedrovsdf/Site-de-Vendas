// Função para remover endereço
function removeAddress(button) {
    const addressItem = button.parentElement;
    addressItem.remove(); // Remove o item da lista
}

// Função para mudar senha
document.getElementById('change-password-button').addEventListener('click', () => {
    alert('Opção para mudar senha ainda não implementada.');
});

// Função para adicionar novo endereço
document.getElementById('add-address-button').addEventListener('click', () => {
    alert('Opção para adicionar novo endereço ainda não implementada.');
});

// Função para devolver produto
function returnProduct(orderId) {
    alert(`Produto do pedido ${orderId} devolvido.`);
}

// Função para comprar novamente um produto
function reorderProduct(orderId) {
    alert(`Produto do pedido ${orderId} adicionado ao carrinho.`);
}

// Função para adicionar forma de pagamento
document.getElementById('add-payment-button').addEventListener('click', () => {
    alert('Opção para adicionar nova forma de pagamento ainda não implementada.');
});
  