valor = 200000
amortização = 200000 / 240
juros = 0.00643403011000343
juros_totais = 0
juros_parcela = 0

for(var i = 0; i <= 240; i++){
  juros_parcela = (valor - (i * amortização)) * juros

  juros_totais += juros_parcela

  console.log(juros_parcela.toFixed(2))
}

console.log(juros_totais.toFixed(2))