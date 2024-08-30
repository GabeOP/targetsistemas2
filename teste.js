// 1)
// let indice = 13; 
// let soma = 0;
// let k = 0;
// while(k < indice) {
//   k++;
//   soma += k;
// }

// console.log(soma); // O valor da variável SOMA será 91.

// 2)

// let sequencia = [];
// sequencia.push(0);
// sequencia.push(1);
// let n = 10;
// let pertenceOuNao = 89

// for(let i = 0; i < n; i++) {
//   sequencia.push(sequencia[i] + sequencia[i+1]);
// }

// for(let i = 0; i < sequencia.length; i++) {
//   if(sequencia[i] === pertenceOuNao) {
//     console.log(sequencia);
//     console.log("Esse número pertence à sequência.");
//     return;
//   }
// }

// console.log(sequencia);

// 3) 
const faturamento = require('./faturamento.json');
let menor = faturamento.f[0].valor;
let maior = faturamento.f[0].valor;
let faturamentoTotal = 0.00;
let mediaMensal; 
let qtdDiasFaturamentoDMaiorQueMediaM = 0;

for(let i = 0; i < faturamento.f.length; i++) {
  
  faturamentoTotal += faturamento.f[i].valor;

  if(faturamento.f[i].valor < menor) {
    menor = faturamento.f[i].valor;
  } 
  if(faturamento.f[i].valor > maior) {
    maior = faturamento.f[i].valor;
  }
}

mediaMensal = faturamentoTotal / faturamento.f.length;

for(let i = 0; i < faturamento.f.length; i++) {
  if(faturamento.f[i].valor.toFixed(2) > mediaMensal) {
    qtdDiasFaturamentoDMaiorQueMediaM++;
  }
}
console.log(maior);
console.log(menor);
console.log(faturamentoTotal);
console.log(mediaMensal.toFixed(2));
console.log(qtdDiasFaturamentoDMaiorQueMediaM)



