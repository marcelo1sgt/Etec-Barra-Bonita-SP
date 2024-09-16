/*Escreva um programa que pede o raio de um círculo, e em seguida exiba o perímetro e área do círculo.*/

var raio = parseFloat(prompt("Forneça a medida do raio de um cículo e lhe devolverei a medida do perímetro e a área do mesmo.\nQual é a medida do raio do círculo? "));
var pi = 3.14;

//var perimetro = 2 * pi * raio;
//var area = 2 * pi * (raio * raio);

console.log("O perímetro de um circulo com raio " + raio + " é de: " + (2 * pi * raio) + ".");
console.log("A área de um circulo com raio " + raio + " é de: " + (2 * pi * (raio * raio)) + ".");