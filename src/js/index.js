const botaoMostraProjetos = document.querySelector('.btn-mostra-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostraProjetos.addEventListener('click', () => {
    esconderBotao();    
    mostrarMaisProjetos();
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function esconderBotao() {
    botaoMostraProjetos.classList.add('remover');
}
