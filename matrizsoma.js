
const matriz1 = [10, 20, 30, 40];
const matriz2 = [50, 60, 70, 80];
const matriz3 = [];

let soma = 0;

for(let contador = 1; contador <= matriz1.length; contador++){
for(let numero of matriz1 && matriz2){
soma =  matriz1 + matriz2;
matriz3.push(soma)
}
}

document.write(`Matriz 1 = ${matriz1} </br> Matriz 2 = ${matriz2} </br> Soma das matrizes = ${matriz3}`);