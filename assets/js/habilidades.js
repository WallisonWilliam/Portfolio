const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
    '<p>Java</p> <br> <p>O Java é uma linguagem de programação multiplataforma, orientada a objetos e centrada em rede que pode ser usada como uma plataforma em si.</p> <br>'
]
const dataInicio = [
    (new Date(2021, 10, 1)).getTime(), // 0
    (new Date(2021, 10, 1)).getTime(), // 1
    (new Date(2022, 0, 1)).getTime(), // 2
    (new Date(2022, 3, 1)).getTime(), // 3
    (new Date(2022, 3, 1)).getTime(), // 4
    (new Date(2022, 1, 1)).getTime(), // 5
    (new Date(2021, 11, 1)).getTime(), // 6
    (new Date(2021, 11, 1)).getTime(), // 7
]
const dataHoje = (new Date()).getTime();

skills.forEach((elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje - dataInicio[index1]) / (1000 * 60 * 60 * 24 * 30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>`;
    })
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = 'Passe o mouse por cima de alguma habilidade para ler a descrição';
    })
});



