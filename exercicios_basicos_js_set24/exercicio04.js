/*Um novo modelo de carro, super econômico foi lançado.
Ele faz 20 km com 1 litro de combustível.
Cada litro de combustível custa R$ 5,00.

Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida diga quantos
litros de combustível ele pode comprar e quantos kilometros o carro consegue andar com este tanto de combustível.
Seu script será usado no computador de bordo do carro.*/

var dinheiro = parseFloat(prompt("Quantos litros de combustível poderei comprar e quantos quilômetros poderei percorrer com R$ "));
//var combustivel = dinheiro / 5;
//var km = combustivel * 20;

//console.log("Com o valor de R$ " + dinheiro + " você poderá abastecer o carro com " + combustivel + " litros de combustível e poderá percorrer uma distância de " + km + " Km.");
console.log("Com o valor de R$ " + dinheiro + " você poderá abastecer o carro com " + dinheiro / 5 + " litros de combustível e poderá percorrer uma distância de " + (dinheiro / 5) * 20 + " Km.");