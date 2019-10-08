const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require("./routes");


const app = express();

mongoose.connect('mongodb+srv://yuri:urabura22@servidorteste-w68vm.mongodb.net/testeApp?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology: true,
})

//req.query = Acessar query params
//req.params = Acessar route params (editar e deletar)
//req.body = Acessar o corpo da requisição


app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..' , 'uploads')));
app.use(routes);


app.listen(3333);