/*
Apresente o Menu de Pizzas:
1 -> Mussarela -> R$ 20,00
2 -> Calabresa -> R$ 25,00
3 -> Marguerita -> R$ 23,00
4 -> 4 Queijos -> R$ 29,99
5 -> Baiana -> 22,50

Apresente o Menu de Bebidas:
1 -> Refrigerante Lata -> R$ 5,00
2 -> Refrigerante 2L -> R$ 10,00
3 -> Agua -> R$ 3,50
4 -> Suco -> R$ 7,50

Solicite ao usuário qual Pizza e quantidade que deseja comprar, qual refrigerante e quantidade, ao final apresente o total a pagar.
*/



/*var pizza = parseInt(prompt("Menu de Pizzas:\n1 -> Mussarela -> R$ 20,00\n2 -> Calabresa -> R$ 25,00\n3 -> Marguerita -> R$ 23,00\n4 -> 4 Queijos -> R$ 29,99\n5 -> Baiana -> R$ 22,50\nDigite o código da pizza: "));

var qtdePizza;
var precoPizza;

if (pizza == 1) {
    qtdePizza = parseInt(prompt("Digite a quantidade de pizzas: "));
    precoPizza = 20;
} else if (pizza == 2) {
    qtdePizza = parseInt(prompt("Digite a quantidade de pizzas: "));
    precoPizza = 25;
} else if (pizza == 3) {
    qtdePizza = parseInt(prompt("Digite a quantidade de pizzas: "));
    precoPizza = 23;
} else if (pizza == 4) {
    qtdePizza = parseInt(prompt("Digite a quantidade de pizzas: "));
    precoPizza = 29.99;
} else if (pizza == 5) {
    qtdePizza = parseInt(prompt("Digite a quantidade de pizzas: "));
    precoPizza = 22.50;
} else {
    precoPizza = 0;
    qtdePizza = 0;
}

var totalPizza = precoPizza * qtdePizza;

var bebida = parseInt(prompt("Menu de Bebidas:\n1 -> Refrigerante Lata -> R$ 5,00\n2 -> Refrigerante 2L -> R$ 10,00\n3 -> Agua -> R$ 3,50\n4 -> Suco -> R$ 7,50\nDigite o código da bebida: "));

var qtdeBebida;
var precoBebida;

if (bebida == 1) {
    qtdeBebida = parseInt(prompt("Digite a quantidade de bebidas: "));
    precoBebida = 5;
} else if (bebida == 2) {
    qtdeBebida = parseInt(prompt("Digite a quantidade de bebidas: "));
    precoBebida = 10;
} else if (bebida == 3) {
    qtdeBebida = parseInt(prompt("Digite a quantidade de bebidas: "));
    precoBebida = 3.50;
} else if (bebida == 4) {
    qtdeBebida = parseInt(prompt("Digite a quantidade de bebidas: "));
    precoBebida = 7.50;
} else {
  
    precoBebida = 0;
    qtdeBebida = 0;
}

var totalBebida = precoBebida * qtdeBebida;
var total = totalPizza + totalBebida;

console.log("Total a pagar: R$ " + total);*/






var descricaoPizza = "*** Menu de Pizzas ***\n";
descricaoPizza += "1 -> Mussarela -> R$ 20,00\n";
descricaoPizza += "2 -> Calabresa -> R$ 25,00\n";
descricaoPizza += "3 -> Marguerita -> R$ 23,00\n";
descricaoPizza += "4 -> 4 Queijos -> R$ 29,99\n";
descricaoPizza += "5 -> Baiana -> R$ 22,50\n";
descricaoPizza += "Digite o código da pizza: ";

var codigoPizza = parseInt(prompt(descricaoPizza));
var qtdePizza = parseInt(prompt("Digite a quantidade desejada da pizza: "));
var valorPizza = 0 
if (codigoPizza == 1) {
    valorPizza += qtdePizza * 20;
} else if (codigoPizza == 2) {
    valorPizza += qtdePizza * 25;
} else if (codigoPizza == 3) {
    valorPizza += qtdePizza * 23;
} else if (codigoPizza == 4) {
    valorPizza += qtdePizza * 29.99;
} else if (codigoPizza == 5) {
    valorPizza += qtdePizza * 22.50;
}else {
    console.log("Digite um código de VÁLIDO para pizza!");
}

var descricaoBebida = "*** Menu de Bebidas ***\n";
descricaoBebida += "1 -> Refrigerante Lata -> R$ 5,00\n";
descricaoBebida += "2 -> Refrigerante 2L -> R$ 10,00\n";
descricaoBebida += "3 -> Agua -> R$ 3,50\n";
descricaoBebida += "4 -> Suco -> R$ 7,50\n";
descricaoBebida += "Digite o código da bebida: ";

var codigoBebida = parseInt(prompt(descricaoBebida));
var qtdeBebida = parseInt(prompt("Digite a quantidade desejada da bebida: "));
var valorBebida = 0;
if (codigoBebida == 1) {
    valorBebida += qtdeBebida * 5;
} else if (codigoBebida == 2) {
    valorBebida += qtdeBebida * 10;
} else if (codigoBebida == 3) {
    valorBebida += qtdeBebida * 3.50;
} else if (codigoBebida == 4) {
    valorBebida += qtdeBebida * 7.50;
} else {
    console.log("Digite um código VÁLIDO para bebida!");
}
var valorTotal = valorPizza + valorBebida;

console.log ("Você pediu a pizza de código [ " + codigoPizza + " ]" + ".");
console.log ("Foram pedidas [ " + qtdePizza + " ]" + " pizzas.");
console.log ("Total R$ " + valorPizza);

console.log ("Você pediu a bebida de código [ " + codigoBebida + " ]" + ".");
console.log ("Foram pedidas [ " + qtdeBebida + " ] bebidas.");
console.log ("Total: R$ " + valorBebida);

console.log ("O valor total de sua compra é de R$ " + valorTotal);