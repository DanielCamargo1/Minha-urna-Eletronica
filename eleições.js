const listaDeBotaoDaUrna = document.querySelectorAll('.bot-items');
const campoDeExibicao = document.querySelector('#number'); 
const nome = document.querySelector('.nome');
for( let c = 0; c < listaDeBotaoDaUrna.length; c++){
    const botao = listaDeBotaoDaUrna[c];
    botao.onclick = function () {
        campoDeExibicao.value += botao.value
    }
    const botaoConfirmar = document.querySelector('.confirmar');
    botaoConfirmar.onclick = function () { 
        let audio = document.querySelector('#audio').play();// Futuramente, caso seja interessante, adicionar audio da urna
        if(campoDeExibicao.value == '22'){
            console.log('bolsonaro');
            const fotoCandidato = document.querySelector('#candidato').innerHTML = "<img src='bolsonaro.png' alt='foto presidente jair bolsonaro' width='250'>"
            nome.innerHTML = 'JAIR BOLSONARO'
        } else if (campoDeExibicao.value == '13'){
            console.log('Lula');
            const fotoCandidato = document.querySelector('#candidato').innerHTML = "<img src='lula.png' alt='foto presidente lula' width='250'>"
            nome.innerHTML = 'LULA'
        } else {
            alert('Desculpe candidato não foi encontrado')
            campoDeExibicao.value = ''
        }
    }
}
const botaoApagar = document.querySelector('#corrige').onclick = function (){
    campoDeExibicao.value = '';
}   
