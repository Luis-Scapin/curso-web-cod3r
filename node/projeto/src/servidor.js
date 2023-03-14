const porta = 3003

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Converte para JSON automaticamente
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.status(201).send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.status(200).send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`---> Servidor escutando a porta ${porta}...`)
})