class Produto {
    constructor(ano, mes, dia, nome, tipo, descricao, valor) {
      this.ano = ano
      this.mes = mes
      this.dia = dia
      this.nome = nome
      this.tipo = tipo
      this.descricao = descricao
      this.valor = valor
    }
}

function cadastroProduto() {
  
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let nome = document.getElementById('nome')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let produto = new Produto(
        ano.value,
        mes.value,
        dia.value,
        nome.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    console.log(produto)
}


