/*Você está no Brasil, e para temperatura usamos o grau Celsius.
Porém, quando você for contrato para trabalhar como programador Python no exterior, deverá usar graus Fahrenheit.

A fórmula da conversão é a seguinte: F = (9 / 5) * C + 32

Tutorial completo de JavaScript
 Ou seja, você fornece a temperatura em graus Celsius, e seu script JS faz a conversão para graus Fahrenheit.*/

var Fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
var Celsius = (Fahrenheit - 32) * 5 / 9;

console.log("A temperatura de " + Fahrenheit + "°F convertida em Celsius é de " + Celsius + "°C." );
//console.log("A temperatura de " + Fahrenheit + "°F convertida em Celsius é de " + (Fahrenheit - 32) * 5 / 9 + "°C." );