const express = require('express')
const bodyParser = require('body-parser') // entender melhor o que faz

const app = express()
const http = require('http')


app.use(express.json())
app.use(loggerMiddleware)

app.get('/rota-secreta', authMiddleware, (req, res) => {
    res.status(200).json({ mensagem: "Acesso liberado! A senha esta correta."})
})

const loggerMiddleware = (req, res, next) => {
    const logDate = new Date().toISOString()
    console.log(`${logDate}, Metodo de requisicao: ${req.method} - URL Original: ${req.originalUrl}`)
    next();
};

const authMiddleware = (req, res, next) => {
    if(req.body.chave === 'ACESSO-123'){
        next();
    }
    else{
        res.status(401).json({ erro: "Senha invalida."}) // Para aqui por que uso res. Ao devolver um res, a funcao para.
    }
}

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
 //lembrete, revisar tudo isso amanha! ha pontas soltas ainda
