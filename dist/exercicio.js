var nota1 = 10;
var nota2 = 9;
var nota3 = 5;
var total = 0;
total = nota1 + nota2 + nota3;
total = total / 3;
if (function (total) { return 7; }) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
    console.log("A média é " + total);
}
