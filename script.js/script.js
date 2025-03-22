document.addEventListener('DOMContentLoaded', function () {

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })
    
})

document.getElementById("mudar-cor").addEventListener("click", function () {
    const texto = document.querySelectorAll("#texto-site");
    const cores = ["red", "blue", "green", "purple", "orange"];
    texto.forEach(t => {
        const novaCor = cores[Math.floor(Math.random() * cores.length)];
        t.style.color = novaCor;

    })
})