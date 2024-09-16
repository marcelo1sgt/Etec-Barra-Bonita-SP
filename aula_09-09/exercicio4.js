/*
O cardápio de uma lanchonete é o seguinte:
Especificação Preço unitário 
100 Cachorro quente 1,10 
101 Bauru simples 1,30 
102 Bauru c/ovo 1,50 
103 Hamburger 1,10 
104 Cheeseburger 1,30 

Escrever um algoritmo que leia o código do lanche pedido, a quantidade e calcule o valor a ser pago por aquele lanche. 
*/

var cardapio = parseInt(prompt("*** FAÇA SEU PEDIDO PELO CÓDIGO DO PRODUTO ***\nCARDÁPIO\nEspecificação Preço unitário:\n100 Cachorro quente 1,10\n101 Bauru simples 1,30\n102 Bauru c/ovo 1,50\n103 Hamburger 1,10\n104 Cheeseburger 1,30\nDIGITE O CÓDIGO DO PEDIDO: "));
var qtde = parseInt(prompt("Digite a quantidade: "));
var codigo100 = 1.10 * qtde;
var codigo101 = 1.30 * qtde;
var codigo102 = 1.50 * qtde;
var codigo103 = 1.10 * qtde;
var codigo104 = 1.30 * qtde;

if (cardapio == 100) {
console.log("O valor de sua compra é de R$ " + codigo100);
} else if (cardapio == 101) {
    console.log("O valor de sua compra é de R$ " + codigo101);
} else if (cardapio == 102) {
    console.log("O valor de sua compra é de R$ " + codigo102);
} else if (cardapio == 103) {
    console.log("O valor de sua compra é de R$ " + codigo103);
} else if (cardapio == 104) {
    console.log("O valor de sua compra é de R$ " + codigo104);
} else {
        console.log("Digite um código VÁLIDO!!!");
}

/*var descricaoCardapio = "===== ESCOLHA UM LANCHE =====\n";
descricaoCardapio += "100 | Cachorro quente  |  1,10\n";
descricaoCardapio += "101 | Bauru simples    |  1,30\n";
descricaoCardapio += "102 | Bauru c/ovo      |  1,50\n";
descricaoCardapio += "103 | Hamburger        |  1,10\n";
descricaoCardapio += "104 | Cheeseburger     |  1,30\n";  
descricaoCardapio += "\nDigite o CÓDIGO do lanche escolhido:";

var codigoLanche = parseInt(prompt(descricaoCardapio));

var quantidade = parseInt(prompt("Quantos lanches deseja pedir?"));

var valorTotal = 0;

if (codigoLanche == 100) {
    valorTotal = quantidade * 1.10;
        } else if (codigoLanche == 101) {
            valorTotal = quantidade *1.30;
        } else if (codigoLanche == 102) {
            valorTotal = quantidade *1.50;
        } else if (codigoLanche == 103) {
            valorTotal = quantidade *1.10;
        } else if (codigoLanche == 104){
            valorTotal = quantidade *1.30;
        } else {
            console.log ("Código do lanche inválido");
        }
        console.log ("Seu pedido do lanche [ " + codigoLanche + " ]");
        console.log ("Foram pedidos [ " + quantidade + " ] lanches");
        console.log ("Total a pagar R$", valorTotal);*/
