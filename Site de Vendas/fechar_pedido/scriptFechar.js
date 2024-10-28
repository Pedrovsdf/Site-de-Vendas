document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado');
    // Chama a função para abrir o item padrão
    abrirItemPadrao();
});

function abrirItemPadrao() {
    const itemPadrao = document.querySelector('.lista-itens .item .titulo');
    if (itemPadrao) {
        const expansao = itemPadrao.nextElementSibling;
        if (expansao) {
            expansao.classList.add('aberta');
            itemPadrao.classList.add('ativo');
        }
    }
}

function toggleExpand(event, element) {
    event.stopPropagation(); // Impede que o clique se propague para o item pai
    const expansao = element.nextElementSibling;

    // Fecha todos os itens
    document.querySelectorAll('.item .expansao').forEach(function(exp) {
        exp.classList.remove('aberta');
    });

    // Remove a classe "ativo" de todos os títulos
    document.querySelectorAll('.item .titulo').forEach(function(titulo) {
        titulo.classList.remove('ativo');
    });

    // Abre o item clicado
    if (!expansao.classList.contains('aberta')) {
        expansao.classList.add('aberta');
        element.classList.add('ativo');
    }
}
  
document.querySelectorAll('.btn-pagamento').forEach(function(button) {
    button.addEventListener('click', function() {
      // Desmarcar todos os botões
      document.querySelectorAll('.btn-pagamento').forEach(function(btn) {
        btn.classList.remove('active');
      });
      // Marcar o botão clicado
      button.classList.add('active');
    });
});

const subtotal = 25.99; // Valor fixo do subtotal

function atualizarValorTotal(frete) {
    const valorTotal = subtotal + frete;
    document.getElementById("valor-total").textContent = `R$${valorTotal.toFixed(2).replace('.', ',')}`;
}

function selecionarFrete(tipoFrete, valorFrete) {
    var nomeFrete = document.getElementById("nome-frete");
    var precoFrete = document.getElementById("preco-frete");

    if (tipoFrete === 'SEDEX') {
        nomeFrete.textContent = 'SEDEX';
        precoFrete.textContent = `R$${valorFrete.toFixed(2).replace('.', ',')}`;
    } else if (tipoFrete === 'PAC') {
        nomeFrete.textContent = 'PAC';
        precoFrete.textContent = `R$${valorFrete.toFixed(2).replace('.', ',')}`;
    }

    // Atualiza o valor total
    atualizarValorTotal(valorFrete);

    // Desmarca todas as bolinhas e marca apenas a escolhida
    var bolinhas = document.querySelectorAll(".bolinha");
    bolinhas.forEach(function(bolinha) {
        bolinha.classList.remove('selecionado');
    });

    // Marca a bolinha clicada
    event.target.classList.add('selecionado');
}