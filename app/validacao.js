function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;

        return;
    }



    if (numero === numeroSecreto) {
        document.body.innerHTML += `
            <h2>Você acertou</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>` 
    } else {
        elementChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>` 
    }
}

function chuteForInvalido(chute) {
    return Number.isNaN(chute);
}


function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', evento => {
    if (evento.target.id == 'jogar-novamente') {
        window.location.reload();
    }
}) 