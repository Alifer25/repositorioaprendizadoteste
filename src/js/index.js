const botaoMostraProjetos = document.querySelector('.btn-mostra-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
let mostrandoMais = true; // Variável de controle para alternar entre mostrar mais e mostrar menos

botaoMostraProjetos.addEventListener('click', () => {
    if (mostrandoMais) {
        mostrarMaisProjetos();
        botaoMostraProjetos.textContent = 'Mostrar Menos';
    } else {
        ocultarProjetos();
        botaoMostraProjetos.textContent = 'Mostrar Mais';
    }
    mostrandoMais = !mostrandoMais; // Alterna o valor da variável
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function ocultarProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
}

