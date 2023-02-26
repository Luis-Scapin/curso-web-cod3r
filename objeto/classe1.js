class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(lancamento => this.lancamentos.push(lancamento))
    }

    sumario() {
        let valorConsolidado = 0

        this.lancamentos.forEach(lancamento => {
            valorConsolidado += lancamento.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(2, 2023)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())