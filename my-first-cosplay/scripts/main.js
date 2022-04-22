let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc == 'imagens/jett-cosplay.jpg'){
         minhaImagem.setAttribute('src','imagens/jett-cosplay2.jpg');
    } else{
        minhaImagem.setAttribute ('src','imagens/jett-cosplay.jpg');
        }
    }
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome) {
        defineNomeUsuario();
    } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.innerHTML = 'Cosplays são legais, ' + meuNome;
    }
}
if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else{
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.innerHTML = 'Cosplays são legais, ' + nomeGuardado;
}


meuBotao.onclick = function() {
     defineNomeUsuario();
}