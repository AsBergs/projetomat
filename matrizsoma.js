const matriz = [12.381, 10.325, 12.347, 10.432];
const matriz2 = [5.670, 4.549, 5.728, 4.516];
const matriz3 = [];

let soma = 0;

for(let numero of matriz && matriz2){
 soma =  numero + numero;
matriz3.push(soma);
}

document.write(`Matriz 1 = ${matriz} </br> Matriz 2 = ${matriz2} </br> Soma das matrizes = ${matriz3}`);