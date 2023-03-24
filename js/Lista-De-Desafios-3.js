// Escreva um programa onde, você chame uma função enviando um número, a função deve imprimir na tela
// os números de 1 até o número que voçê enviou.

function randomNumber(number) {
    for(let i = 1; i <= number; i++){
        console.log("Digitando...",i)
    }
}

randomNumber(5)

// Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10)
// e escrever a tabuada de 1 a 10 do valor lido.

const calculate = (value) => {
    if(value > 10 || value < 1) {
        console.log("Digite um número entre 1 e 10")
        return
    }

    for(let i = 1; i <= 10; i++) {
        console.log(`${i} x ${value} = ${i * value}`)
    }
}

calculate(1)

// Escreva um programa onde, você chame uma função, e ela diga a hora exata.
console.log(new Date().toLocaleTimeString('pt-BR'))

// Escreva um programa onde, você chame uma função, e ela diga a data exata.
console.log(new Date().toLocaleDateString('pt-BR'))

// Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior.

const numbers = (numberOne, numberTwo) => {
     if(numberOne > numberTwo) {
        console.log(`O número ${numberOne} é o maior`)
     }else {
        console.log(`O número ${numberTwo} é o maior`)
     }
}

numbers(20,40)

// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o sálario e número de filhos.
// A prefeitura deseja saber: - Média do salário da população, média do número de filhos e o maior salário.
// O final da leitura de dados se dará com a entrada de um salário negativo - faça isso usando uma função.

const people = [
    {
        numberOfChildren: 2,
        salary: 2000
    },
    {
        numberOfChildren: 0,
        salary: 2300
    },
    {
        numberOfChildren: 5,
        salary: 3000
    },
    {
        numberOfChildren: 2,
        salary: 2300
    },
    {
        numberOfChildren: 1,
        salary: 1000
    },
    {
        numberOfChildren: 2,
        salary: 2500
    },
    {
        numberOfChildren: 0,
        salary: -2000
    },
]

function  indAverageAndHighestSalary(peopleInformation) {
    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0


    for(let i = 0; i < peopleInformation.length; i++) {
        const salary = peopleInformation[i].salary
        const children = peopleInformation[i].numberOfChildren

        if(salary > highestSalary) highestSalary = salary

        if(salary < 0) {
            console.log(`Média de Sálario R$${(averageSalary / i).toFixed(0)}`)
            console.log(`Média de Filhos ${(averageChildren / i).toFixed(0)}`)
            console.log( `Maior Sálario R$${highestSalary}`)
            break
        }else {
            averageSalary += salary
            averageChildren += children
        }
    }
}

indAverageAndHighestSalary(people)
