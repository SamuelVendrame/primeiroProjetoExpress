const express = require('express')
const bodyParser = require('body-parser') // entender melhor o que faz

const app = express()
const http = require('http')

const userRoutes = require('./routes/userRoutes')

app.use('/usuarios', userRoutes)


app.use(express.json()) // Cria a propriedade body no req, sendo portanto um middleware, porque trata a requisicao (transforma-a em json)
app.use(loggerMiddleware)

app.get('/rota-secreta', authMiddleware, (req, res) => { // entender melhor / entender melhor tambem o pq isso eh um callback
    res.status(200).json({ mensagem: "Acesso liberado! A senha esta correta."})
})

const loggerMiddleware = (req, res, next) => {
    const logDate = new Date().toISOString()
    console.log(`${logDate}, Metodo de requisicao: ${req.method} - URL Original: ${req.originalUrl}`)
    next();
};

const authMiddleware = (req, res, next) => {
    if(req.body.chave === 'ACESSO-123'){ // req.body ????
        next();
    }
    else{
        res.status(401).json({ erro: "Senha invalida."}) // Para aqui por que uso res. Ao devolver um res, a funcao para.
    }
}

const errorHandler = (err, req, res, next) => {
    console.error("OPS! Um erro aconteceu: ", err.stack) // .stack eh usado para ver onde o erro ocorreu
    res.status(500).json({ erro: 'Erro interno do servidor. Tente novamente mais tarde.' })
}

app.use(errorHandler) 


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
 //lembrete, revisar tudo isso amanha! ha pontas soltas ainda


function fazendoFuncaoPraCommitar() {
    console.log("Commitando quadrado verde")
}