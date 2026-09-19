const chamados = [];
let proximoId = 1;

function criar(dados) {
    console.log('2 service recebeu', dados);
    const chamado = {
        id: proximoId++,
        titulo: dados.titulo,
        status: "aberto"
    }
    chamados.push(chamado)

    console.log('3 - SERVICE criou', chamado)
    return chamado
}

function listar() {
    return chamados
}

module.exports = { criar, listar }