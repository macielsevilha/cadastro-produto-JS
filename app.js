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

    recuperarTodosRegistros() {

        let registros = []

        let id = localStorage.getItem('id')

        for (let i = 1; i <= id; i++) {
            let registro = JSON.parse(localStorage.getItem(i))

            if (registro == null) {
                continue
            }
            registros.push(registro)
        }

        return registros
    }
}

let bd = new Bd()

function cadastroProduto() {

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

function mostrarListraRegistros() {
    let regitro = bd.recuperarTodosRegistros()

    let cabecalho = document.getElementById('cabecalho')
    c = cabecalho.insertRow()

    c.insertCell(0).outerHTML = '<th>data</th>'
    c.insertCell(1).outerHTML = '<th>nome</th>'
    c.insertCell(2).outerHTML = '<th>tipo</th>'
    c.insertCell(3).outerHTML = '<th>descrição</th>'
    c.insertCell(4).outerHTML = '<th>valor</th>'

    let conteudo = document.getElementById('conteudo')

    regitro.forEach((e) => {

        l = conteudo.insertRow()
        l.insertCell(0).innerHTML = `${e.dia}/${e.mes}/${e.ano}`
        l.insertCell(1).innerHTML = e.nome

        switch (parseInt(e.tipo)) {
            case 1: e.tipo = 'Alimentação'
                break
            case 2: e.tipo = 'Transporte'
                break
            case 3: e.tipo = 'Lazer'
                break
            case 4: e.tipo = 'Tecnologia'
                break
            case 5: e.tipo = 'Esportes'
        }

        l.insertCell(2).innerHTML = e.tipo
        l.insertCell(3).innerHTML = e.descricao
        e.valor = e.valor.replace('.', ',')
        l.insertCell(4).innerHTML = `$ ${e.valor}`
       
        let btn = document.createElement('button')
        btn.classList.add('btn', 'btn-danger')
        btn.innerHTML = "<i class='fas fa-trash'></i>"

        l.insertCell(5).append(btn)

    })


}

