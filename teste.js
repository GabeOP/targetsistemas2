// 1)
let indice = 13; 
let soma = 0;
let k = 0;
while(k < indice) {
  k++;
  soma += k;
}

console.log(soma); // O valor da variável SOMA será 91.

// 2)
let sequencia = [];
sequencia.push(0);
sequencia.push(1);
let n = 10;
let pertenceOuNao = 89

for(let i = 0; i < n; i++) {
  sequencia.push(sequencia[i] + sequencia[i+1]);
}

for(let i = 0; i < sequencia.length; i++) {
  if(sequencia[i] === pertenceOuNao) {
    console.log(sequencia);
    console.log("Esse número pertence à sequência.");
    return;
  }
}

console.log(sequencia);

// 3) 
const faturamento = require('./faturamento.json');
let menor = faturamento.f[0].valor;
let maior = faturamento.f[0].valor;
let faturamentoTotal = 0.00;
let mediaMensal; 
let qtdDiasFaturamentoDMaiorQueMediaM = 0;
let diasComFaturamento = 0;

for(let i = 0; i < faturamento.f.length; i++) {
  
  if(faturamento.f[i].valor != 0) {
    diasComFaturamento++;
  }

  faturamentoTotal += faturamento.f[i].valor;

  if(faturamento.f[i].valor < menor) {
    menor = faturamento.f[i].valor;
  } 
  if(faturamento.f[i].valor > maior) {
    maior = faturamento.f[i].valor;
  }
}

mediaMensal = faturamentoTotal / diasComFaturamento

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

// 4)
const faturamentoMensal = [
  {estado: "SP", valor: 67836.43},
  {estado: "RJ", valor: 36678.66},
  {estado: "MG", valor: 29229.88},
  {estado: "ES", valor: 27165.48},
  {estado: "Outros", valor: 19849.53} 
]

let valorMensal = 0;

for(let i = 0; i < faturamentoMensal.length; i++) {
  valorMensal += faturamentoMensal[i].valor;
}

for(let i = 0; i < faturamentoMensal.length; i++) {
  let estado = faturamentoMensal[i].estado;
  let porcentagem = (faturamentoMensal[i].valor / valorMensal) * 100;

  console.log(`${estado}: ${porcentagem.toFixed(1)}%`)
}

// 5)
function invertePalavra(palavra="gabriel") {

  let palavraInvertida = [];
  let letrasSeparadas = palavra.split("");
  
  for(let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida.push(letrasSeparadas[i])
  }

  return palavraInvertida.toString().replaceAll(",", "");
}

console.log(invertePalavra())
