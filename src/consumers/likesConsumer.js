const queue = require("../services/queueService");

const consume = async() => {
    queue.consume("newLikes", callback => {
        //LOGICA PARA SALVAR NO BANCO
        console.log("processing " + callback.content.toString());
    })
}

module.exports = {
    consume
}

