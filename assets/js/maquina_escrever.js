const meuNome = document.querySelector('.meu-nome');
const fName = meuNome.innerHTML;
meuNome.innerHTML = '';


function typeWriter(nome) {
    setTimeout(() => {
        const meuNomeF = nome.split('');
        meuNome.innerHTML = '';
        meuNomeF.forEach((letra, index) => {
            setTimeout(function () {
                meuNome.innerHTML += letra;
            }, 150 * index)
        })
    }, 1500)

}


