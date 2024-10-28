document.addEventListener('DOMContentLoaded', function() {
    const produtos = document.querySelectorAll('.item-produto');
    const produtosPorPagina = 10;
    let paginaAtual = 1;
    const totalPaginas = Math.ceil(produtos.length / produtosPorPagina);

    const listaProdutos = document.getElementById('lista-produtos');
    const pageInfo = document.getElementById('pageInfo');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    function exibirProdutos() {
        // Esconde todos os produtos
        produtos.forEach(produto => produto.style.display = 'none');

        // Exibe os produtos da página atual
        const inicio = (paginaAtual - 1) * produtosPorPagina;
        const fim = inicio + produtosPorPagina;

        for (let i = inicio; i < fim && i < produtos.length; i++) {
            produtos[i].style.display = 'block';
        }

        // Atualiza o texto de informação da página
        pageInfo.textContent = `Página ${paginaAtual} de ${totalPaginas}`;

        // Controla a ativação dos botões de navegação
        prevBtn.disabled = paginaAtual === 1;
        nextBtn.disabled = paginaAtual === totalPaginas;
    }

    // Botões de navegação
    prevBtn.addEventListener('click', function() {
        if (paginaAtual > 1) {
            paginaAtual--;
            exibirProdutos();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (paginaAtual < totalPaginas) {
            paginaAtual++;
            exibirProdutos();
        }
    });

    // Exibir os produtos da primeira página ao carregar
    exibirProdutos();
});
