const chamadoService = require('../services/chamadoService.js')

function criar(req, res) {
    console.log('1 - CONTROLLER recebeu', req.body);
    const chamado = chamadoService.criar(req.body)
    res.status(201).json(chamado)
}

function listar(req, res) {
    const chamados = chamadoService.listar()
    res.status(200).json(chamados)
}

module.exports = { criar, listar }