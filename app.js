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
    validarDados() {
        for (let i in this) {
            if (this[i] == undefined || this[i] == null || this[i] == '') {
                return false
            }
        }
        return true
    }
}

class Bd {
    constructor() {
       let id = localStorage.getItem('id')
       
       if (id == null) {
        id = localStorage.setItem('id', 0)
       }
    }

    getProximoId() {
        let id = parseInt(localStorage.getItem('id')) + 1
        this.setProximoId(id)

       return id 
    }
    setProximoId(i) {
      return localStorage.setItem('id', i)
    }
    gravar(d) {
      let id = this.getProximoId()
      localStorage.setItem(id, JSON.stringify(d))

    }
}

function cadastroProduto() {

    let bd = new Bd

    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let nome = document.getElementById('nome')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    ano.classList.add(`${ano.value == '' ? 'is-invalid' : ano.classList.remove('is-invalid')}`)
    mes.classList.add(`${mes.value == '' ? 'is-invalid' : mes.classList.remove('is-invalid')}`)
    dia.classList.add(`${dia.value == '' ? 'is-invalid' : dia.classList.remove('is-invalid')}`)
    nome.classList.add(`${nome.value == '' ? 'is-invalid' : nome.classList.remove('is-invalid')}`)
    tipo.classList.add(`${tipo.value == '' ? 'is-invalid' : tipo.classList.remove('is-invalid')}`)
    descricao.classList.add(`${descricao.value == '' ? 'is-invalid' : descricao.classList.remove('is-invalid')}`)
    valor.classList.add(`${valor.value == '' ? 'is-invalid' : valor.classList.remove('is-invalid')}`)

    ano.classList.add(`${ano.value !== '' ? 'is-valid' : ano.classList.remove('is-valid')}`)
    mes.classList.add(`${mes.value !== '' ? 'is-valid' : mes.classList.remove('is-valid')}`)
    dia.classList.add(`${dia.value !== '' ? 'is-valid' : dia.classList.remove('is-valid')}`)
    nome.classList.add(`${nome.value !== '' ? 'is-valid' : nome.classList.remove('is-valid')}`)
    tipo.classList.add(`${tipo.value !== '' ? 'is-valid' : tipo.classList.remove('is-valid')}`)
    descricao.classList.add(`${descricao.value !== '' ? 'is-valid' : descricao.classList.remove('is-valid')}`)
    valor.classList.add(`${valor.value !== '' ? 'is-valid' : valor.classList.remove('is-valid')}`)

    let produto = new Produto(
        ano.value,
        mes.value,
        dia.value,
        nome.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    if (produto.validarDados()) {

        bd.gravar(produto)

        let modal_titulo = document.getElementById('modal_titulo')
        modal_titulo.innerHTML = 'Enviado com sucesso!'
        modal_titulo.className = 'modal-title fs-5 text-success'

        let modal_conteudo = document.getElementById('modal_conteudo')
        modal_conteudo.innerHTML = 'Os dados foi gravado com sucesso para visualizar é só prosseguir'

        let modal_botao = document.getElementById('modal_botao')
        modal_botao.innerHTML = 'Prosseguir'
        modal_botao.className = 'btn btn-success bg-gradient'

        modal_botao.onclick = () => {
           document.location.href = 'file:///C:/github/cadastro-cliente-JS/consulta.html'
        }

      


    } else {


        let modal_titulo = document.getElementById('modal_titulo')
        modal_titulo.innerHTML = 'Falha ao preencher dados'
        modal_titulo.className = 'modal-title fs-5 text-danger'

        let modal_conteudo = document.getElementById('modal_conteudo')
        modal_conteudo.innerHTML = 'Erro ao gravar os dados por favor volta e preencha os dados corretamente'

        let modal_botao = document.getElementById('modal_botao')
        modal_botao.innerHTML = 'Voltar'
        modal_botao.className = 'btn btn-danger bg-gradient'
    }

}

function limparFormulario() {
    document.location.reload()
}