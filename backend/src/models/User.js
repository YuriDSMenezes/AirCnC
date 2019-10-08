const mongoose = require('mongoose');


// criando a tabela
const UserSchema = new mongoose.Schema({
    email: String,
})

module.exports = mongoose.model('User', UserSchema) 

// nome do model (User) e passa o Schema dele(tabela)