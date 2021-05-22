

var SaldoInicial, ValorDaCompra, SaldoFinal

var SaldoInicial = prompt ('Insira o seu saldo inicial');
var ValorDaCompra = prompt('Insira o valor da compra');


if(ValorDaCompra <= SaldoInicial) {

    var SaldoFinal = (SaldoInicial - ValorDaCompra)
    alert ('A compra ocorreu corretamente! Seu saldo final é de ' +SaldoFinal)
}

else {
    alert ('Saldo Insuficiente')
}