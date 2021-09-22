var valor = document.getElementById('valor')
var prazo = document.getElementById('prazo')
var juros = document.getElementById('juros')
var simular = document.getElementById('simular')

valor.value = 200000
prazo.value = 20
juros.value = 0.08

var resultado = document.getElementById('result')
var table = document.getElementById('table')
var tabletr = document.getElementsByTagName('tr')

simular.addEventListener('click', function(){
  var prazoMes =  prazo.valueAsNumber * 12
  var jurosMes = ((juros.valueAsNumber + 1) ** (1/12)) - 1
  var juros_totais = 0
  var juros_parcela = 0
  var amortização = valor.valueAsNumber / prazoMes

  table.style.display = 'block'
  resultado.style.display = 'flex'

  var PrazoMeses = document.getElementById('prazoMeses')
  PrazoMeses.value = prazoMes
  
  var Juromeses = document.getElementById('jurosMes')
  Juromeses.value = jurosMes
  
  for(var i = 0; i <= 240; i++){
    juros_parcela = (valor.valueAsNumber - (i * amortização)) * jurosMes
    juros_totais += juros_parcela
  
    if(i <= 4){  
      tabletr[i+1].children[0].textContent = i+1
      tabletr[i+1].children[1].textContent = amortização.toFixed(2)
      tabletr[i+1].children[2].textContent = juros_parcela.toFixed(2)
      tabletr[i+1].children[3].textContent = (+juros_parcela.toFixed(2) + +amortização.toFixed(2))
    }
  }

  var Juromeses = document.getElementById('jurosAcumulado')
  Juromeses.value = juros_totais.toFixed(2)
})

