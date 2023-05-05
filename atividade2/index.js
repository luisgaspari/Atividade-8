// Utilizando node criar uma aplicação que recebe o salário, o reajuste e apresente o novo salário
//
// Passo a passo da aplicação:
// npm init
// npm i prompt-sync
//
// Ao enviar a solução compacte os arquivos index.js, package.json e package-lock.json

const prompt = require('prompt-sync')()

const salarioAtual = Number(prompt('Digite o salário atual: '))
const reajuste = Number(prompt('Digite o percentual de reajuste: '))

const novoSalario = salarioAtual * (1 + (reajuste / 100))

console.log('-----------------------------------')
console.log(`O novo salário é: R$ ${novoSalario.toFixed(2)}`)
console.log('-----------------------------------')