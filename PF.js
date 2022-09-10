const express = require('express');
const api = express();

api.get('/teste',(req, res) => {
    return res.status(200).send('Nossa API esta funcionando!');
});

api.get('/PF',(req, res) => {
let valor = Number(req.query.valor);
let tipoInicial = String(req.query.tipoInicial);
let tipoFinal = String(req.query.tipoFinal);
let resultado = Number(req.query.resultado);

function fLerValor() { 
    do {
        valor = Number(prompt("Informe um numero, para realizar a conversão"));
        if (valor < 0 || parseInt(valor) != parseFloat(valor)) {

            alert("Valor informado é invalido");
        }
        console.log(valor);

    } while (valor < 0 || parseInt(valor) != parseFloat(valor));
    return valor;
}

fLerValor();

fLerTipoInicial = () => { 
    do {
        tipoInicial = prompt("Qual o tipo do valor informado? Digite H para hectares, A para acres");
        tipoInicial = tipoInicial.toUpperCase(); 
        if (tipoInicial != 'H' && tipoInicial != 'A') {  

            alert("O valor informado é inválido");

        }
        console.log(tipoInicial);
    } while (tipoInicial != 'H' && tipoInicial != 'A'); 
        return tipoInicial;
}
fLerTipoInicial(); 

fLerTipoFinal = () => { 

    do {
        tipoFinal = prompt("Você deseja converter o valor inicial em que? Digite H para hectares, A para acres");
        tipoFinal = tipoFinal.toUpperCase(); 
        if (tipoFinal != 'H' && tipoFinal != 'A') { 

            alert("O valor informado é inválido");

        }
        console.log(tipoFinal);
    } while (tipoFinal != 'H' && tipoFinal != 'A'); 
        return tipoFinal;
}
fLerTipoFinal();

fRealizaConversao = () => { 

    if (tipoInicial == 'H') {
        if (tipoFinal == 'A') { 

            resultado = valor * 2.47105;
        }
    }
    if (tipoInicial == 'A') {
        if (tipoFinal == 'H') { 

            resultado = valor * 0.404686;
        }

    }
    if (tipoInicial == 'H') {
        if (tipoFinal == 'm2') { 
            resultado = valor * 10.000;
        }
    
    }
    if (tipoInicial == tipoFinal) {
        alert("Não é possível transformar! O tipo do valor inical precisa ser diferente do tipo final");
        resultado = valor / valor; 
    }

    return res.json({
        resultado
    });
}
}

fRealizaConversao(); 
console.log(resultado);

console.log("O número informado é: ", valor);
console.log("<br>", "Transfomar: ", tipoInicial, " para: ", tipoFinal);
console.log("<br>", "O resultado é ", resultado + " " + tipoFinal);

api.listen(5000, () => {
    console.log(`A api está funcionando.`);
});