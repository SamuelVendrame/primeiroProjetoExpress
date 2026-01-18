const express = require('express')
const bodyParser = require('body-parser') // entender melhor o que faz

const app = express()
const http = require('http')

app.use(express.static("public"));

const userRoutes = require('./routes/userRoutes')

app.use('/usuarios', userRoutes)


app.use(express.json()) // Cria a propriedade body no req, sendo portanto um middleware, porque trata a requisicao (transforma-a em json)

const loggerMiddleware = (req, res, next) => {
    const logDate = new Date().toISOString()
    console.log(`${logDate}, Metodo de requisicao: ${req.method} - URL Original: ${req.originalUrl}`)
    next();
};

app.use(loggerMiddleware)

const authMiddleware = (req, res, next) => {
    if(req.body.chave === 'ACESSO-123'){ // req.body ????
        next();
    }
    else{
        res.status(401).json({ erro: "Senha invalida."}) // Para aqui por que uso res. Ao devolver um res, a funcao para.
    }
}

app.get('/rota-secreta', authMiddleware, (req, res) => { // entender melhor / entender melhor tambem o pq isso eh um callback
    res.status(200).json({ mensagem: "Acesso liberado! A senha esta correta."})
})

const errorHandler = (err, req, res, next) => {
    console.error("OPS! Um erro aconteceu: ", err.stack) // .stack eh usado para ver onde o erro ocorreu
    res.status(500).json({ erro: 'Erro interno do servidor. Tente novamente mais tarde.' })
}

app.use(errorHandler) 

// TESTE, APAGAR DEPOIS, MAS FUNCIONAL!!!!!!!!
app.get("/users", (req, res) => {
    res.send("Pedrinho, id 1");
})


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
 //lembrete, revisar tudo isso amanha! ha pontas soltas ainda


function fazendoFuncaoPraCommitar() {
    console.log("Commitando quadrado verde")
}