let num1= parseInt(prompt("digite o 1° numero:"))
let num2= parseInt(prompt("digite o 2° numero:"))
let num3= parseInt(prompt("digite o 3° numero:"))

let NumeroMaior

if(num1>num3)
{
    NumeroMaior=num1
}
else if (num2>num1)
{
    NumeroMaior=num2
}
else
{
    NumeroMaior=num3
}
console.log("o maior numero e:")