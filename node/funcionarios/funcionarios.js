const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const filterChineses = funcionario => funcionario.pais === 'China';
const filterMulheres = funcionario => funcionario.genero === 'F';
const reduceMenorSalario = (funcionario, funcionarioAtual) => funcionarioAtual.salario < funcionario.salario ? funcionarioAtual : funcionario;

axios.get(url).then(response => {
    const funcionarios = response.data

    const chinesaComMenorSalario = funcionarios.filter(filterChineses).filter(filterMulheres).reduce(reduceMenorSalario)

    console.log(chinesaComMenorSalario)
})