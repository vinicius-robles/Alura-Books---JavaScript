const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    // o valor 'disponivel' é declarado por contexto atravéz da classe 'btnLivrosDisponiveis'
    // porém não não é recomendada a utilização em projetos de escopo grande, de longo prazo ou com muita manutenção.
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
}

