// Faça um programa que SOME 2 números.

let firstNumber = 10;
let secondNumber = 15;

let sum = firstNumber + secondNumber;

console.log(sum);

// Faça um programa que multiplique 2 números e o resultado adicione 10.

let numberOne = 2;
let numberTwo = 5;

let result = (numberOne * numberTwo) + 10

console.log(result)

// Faça um programa que encontre a raiz quadrada de um número, multiplique o resultado por 10 e divida por 33.

const number = Math.sqrt(25)
const resultTwo = (number * 10) / 33;

console.log(resultTwo)

// Faça um programa que inicie com dois nomes, e o programa imprima na tela o seguinte dado:
// Olá, meu nome é [nome 1] e meu partner do devclub é (nome 2);

let nameOne = "Mateus"
let nameTwo = "João"

console.log(`Olá meu nome é ${nameOne} e meu partener do devclub é ${nameTwo}`);

// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Ex: João e João, imprime True.
// João e maria imprime false.

let firstName = "João"
let SecondName = "Maria"

let resultNames = firstName !== SecondName // Com o sinal de ! => diferente inverte o resultado: true/false: false/true

console.log(resultNames)

// Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado.
// Porém os dois nomes devem estar em um array. Ex const array = ["João, Maria"]. João e Maria, imprime true.

let names = ["João", "Maria"]

let compare = names[0] === names[1]

console.log(compare)

// Crie 5 Objetos, neles devem conter os dados de 5 pessoas que você conhece. Minimo 5 dados por pessoa.

const object = {
    name: "Mateus",
    age: "19",
    height: 1.70,
    nationality: "Brasileiro",
    profession: "Programador",
}

console.log(object.name);

// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado, porém, os dois nomes devem estar em dois objetos separados.
// Ex: const object1 = {name: "João"}, object2 = {name"Maria"}.
// João e João imprime true, joão e maria imprimef alse. faça um programa que imprima na tela se um nome é igual ao outro nome digitado.

const object1 = {name: "João"}
const object2 = {name: "Maria"}

const objectResult = object1.name !== object2.name

console.log(objectResult)

// Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.

const ramdomNumber = Math.floor(Math.random() * (100 - 1) + 1);

console.log(ramdomNumber)

// Faça um programa onde colocamos dois números impares e o programa imprima o resto da divisão. 7/3 deve imprimir: 1,25/5
// deve imprimir 0;

let numberImparOne = 25;
let numberImparTwo = 5;

let resultValue = numberImparOne % numberImparTwo
console.log(resultValue)

//Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo.
//Ex: 2 e 5. imprime: false.

//Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é menor que o segundo.
//Ex: 2 e 5. imprime: true.

let number1 = 2;
let number2 = 5;

let resultNumber = number1 < number2; // SInal de maior > sinal de menor <
console.log(resultNumber)

const array = [0, 1 ,2, 3, 4, 5]
console.log(array.length)