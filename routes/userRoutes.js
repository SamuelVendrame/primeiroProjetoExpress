const express = require('express');
const router = express.Router();

const fetchUsers = () => {
    return [
        {nome: "Pedro", id: "1"},
        {nome: "Maria", id: "2"},
    ]
}

router.get('/', (req, res) => {
    const users = fetchUsers();
    console.log('testaadawdwaawdawdawdawde') // APAGAR QUANDO LER 
    res.status(200).json({ 
        mensagem: "Lista de usuarios carregada.",
        data: users
    })
})

module.exports = router // exportando o roteador para ele poder ser usado
// IMPORTANTE ----- REVER TUDO ISSO, conceito ainda esta meio perdido. Peca para o gemini explicar para que isso serve exatamente, e se eh essencial na construcao do meu projeto E como a construcao dele seria. !aaaaaaaaaaaaaaa