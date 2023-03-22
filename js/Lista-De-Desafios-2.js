// Faça um programa que compare um número com 10 e imprime na tela
// "O número é maior, o número é menor o número é igual"

let numberOne = 10

if(numberOne > 10) {
   console.log("O número é maior")
}else if (numberOne < 10) {
   console.log("O número é menor")
}else {
   console.log("O número é igual")
}

// Faça um programa que verifique se uma pessoa é Brasileira ou não. // DEVE SER UM OBJETO

let person = {
    name: "Mateus",
    nationality: "Brasileiro"
}

if(person.nationality === "Brasileiro"){
    console.log("È brasileiro")
}else {
    console.log("Você é estrangeiro")
}

// Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'Ganhador'.
// Então ele também irá gerar um número aleatório entre 1 e 10, e verificar se a pessoa ganhou ou não.
// Em caso ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

let randomNumberOne = Math.floor(Math.random() * (10 - 1) + 1);
let randomNumberTwo = Math.floor(Math.random() * (10 - 1) + 1);

if(randomNumberOne === randomNumberTwo) {
    console.log('Você ganhou!')
}else {
    console.log('Você perdeu!')
}

// Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

let firstNumber = 44
let secondNumber = 20
let thirdNumber = 50

if(firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log("O Primeiro número é  o maior")
}else if (secondNumber > thirdNumber) {
    console.log("O Segundo número é o maior")
}else {
    console.log("O Terceiro número é o maior")
}

if(firstNumber < secondNumber && firstNumber < thirdNumber) {
    console.log("O Primeiro número é o menor")
}else if (secondNumber < thirdNumber) {
    console.log("O Segundo número é o menor")
}else {
    console.log("O Terceiro número é o menor")
}

// Crie 5 objetos nesse formato ( nome: "" idade: "" sexo: "" profissão: "" nacionalidade: "")Ao
// rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo, a pessoa deve ser maior de idade
// e brasileira para ser aprovada.

let firstPerson = {
    name: "Mateus",
    age: 19,
    gender: "male",
    profession: "Programador",
    nationality: "Brasileira"
}

if(firstPerson.age >= 18 && (firstPerson.nationality === "Brasileiro" || firstPerson.nationality === "Brasileira")) {
    console.log("Você passou no processo")
}else {
    console.log("Você NÂO passou no processo")
}

// Faça um programa onde os jurados vão dar a explicação para cada nota data, São permitidas notas de 0 a 10.
// Cada nota deve conter uma mensagem diferente.

const score = 10

switch (score) {
    case 0:
        console.log("Foi muito ruim")
        break;
    case 1:
        console.log("Foi muito pessima")
        break;
    case 2:
        console.log("Pessima")
        break;
    case 3:
        console.log("Ruim")
        break;
    case 4:
        console.log("Não é boa o bastante")
        break;
    case 5:
        console.log("Está na média")
        break;
    case 6:
        console.log("Mediana")
        break;
    case 7:
        console.log("Intermediaria")
        break;
    case 8:
        console.log("Muito Boa")
        break;
    case 9:
        console.log("Excelente")
        break;
    case 10:
        console.log("Você passou com nota maxima")
        break;
    default:
        console.log("Nota não indentificada!!!")
        break;
}

// Faça um programa onde leia um numero e diga se ele é par ou impar.

const Number = 10;

if(Number %2 === 0){
    console.log("O número é par")
}else {
    console.log("O número é impar")
}

// Faça um programa onde leia um número e diga se ele é: - impar - par, - é um número primo e impar, - é par e divisivel por 5

const number = 25;

if(number % 2 === 0){
    if(number % 5 === 0){
        console.log("O número é par e divisivel por 5")
    }else {
        console.log("O número é par e NÂO é divisivel por 5")
    }
}else {
    for (let index = 2; index < number; index++){
        if(number % index === 0){
            console.log("Ele é impar, mas não é primo")
            break;
        }else {
           if (index === number -1) console.log("Ele é um número primo")
        }
    }
}

// Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente:
// - Todos os números são Impares => TODOS OS NÙMEROS SÂO IMPARES
// - Todos os números são Pares => TODOS OS NÙMEROS SÂO pares.

let number1 = 1;
let number2 = 3;
let number3 = 20;
let number4 = 10;

if (number1 %2 === 0 && number2 %2 === 0 && number3 %2 === 0 && number4 %2 === 0) {
    console.log("Todos os números são Pares")
}else if (number1 %2 !== 0&& number2 %2 !== 0 && number3 %2 !== 0 && number4 %2 !== 0) {
    console.log("Todos os números são Impares")
}else {
    console.log("Estão todos misturados, impares e pares.")
}