const esfera = document.getElementById('esfera');

// Função para gerar uma cor hexadecimal aleatória
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Evento de passar o mouse
esfera.addEventListener('mouseenter', () => {
    const novaCor = gerarCorAleatoria();
    esfera.style.backgroundColor = novaCor;
    
    // Opcional: faz a sombra brilhar com a cor nova
    esfera.style.boxShadow = `inset -20px -20px 50px rgba(0,0,0,0.5), 0 0 30px ${novaCor}`;
});