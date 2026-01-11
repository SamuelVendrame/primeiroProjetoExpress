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

    res.status(200).json({ 
        mensagem: "Lista de usuarios carregada.",
        data: users
    })
})

module.exports = router // exportando o roteador para ele poder ser usado