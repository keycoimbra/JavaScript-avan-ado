/*uma forma de escrever as condicionais

// ex if ...else normal:
if (idade >= 18) {
    return 'Maior de idade'
} else {
    return 'Menor de idade'
}

//idade>= 18 ? 'Maior de idade': 'Menor de idade'

function calculaidade(idade) {
    if (idade >= 18) {
        return 'maior de idade'
    } else {
        return 'menor de idade'
    }
}
console.log(calculaidade[20])*/



//exemplo com operador ternario 
let idade = 15;
let podeDirigir = (idade >= 18) ? "Tem permissão para dirigir" : "Não tem permissão para dirigir";
console.log(podeDirigir);
console.log("__________________");

//exemplo teste covid
let testeCovid = true;
let resultadoTeste = (testeCovid === true) ? "Positivo" : "Negativo;"
console.log(`O resultado do teste é: ${resultadoTeste}`);
console.log("__________________");

//exemplo mercadoria
let statusPedido = "disponivel";
let statusPagamento = "não pago";
 
let situacaoEntrega = (statusPedido === "disponivel" && statusPagamento === "pago")
  ? "Entrega liberada" : "Entrega não liberada";
console.log(situacaoEntrega);
