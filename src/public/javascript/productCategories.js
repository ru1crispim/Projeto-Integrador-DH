'user strict'

function mostrarJogosRPG(){
    let texto = document.getElementById('textorpg');
    let jogos = document.getElementById('jogosrpg');
    let mostrarJogos = document.getElementById('mostrarJogosrpg');

    if(texto.style.display === 'none'){
        texto.style.display = 'inline';
        jogos.style.display = 'none';
        mostrarJogos.innerHTML = 'Mostrar jogos'
    } else {
        texto.style.display = 'none';
        jogos.style.display = 'inline';
        mostrarJogos.innerHTML = 'Ocultar jogos'
    }
};

function mostrarJogosFPS(){
    let texto = document.getElementById('textofps');
    let jogos = document.getElementById('jogosfps');
    let mostrarJogos = document.getElementById('mostrarJogosfps');

    if(texto.style.display === 'none'){
        texto.style.display = 'inline';
        jogos.style.display = 'none';
        mostrarJogos.innerHTML = 'Mostrar jogos'
    } else {
        texto.style.display = 'none';
        jogos.style.display = 'inline';
        mostrarJogos.innerHTML = 'Ocultar jogos'
    }
}

