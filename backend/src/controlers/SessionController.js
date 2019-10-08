// métodos no controller - index, show, store, update, destroy
const User = require('../models/User'); //para criar um usuário


module.exports = {
    async store(req , res) {
        const { email } = req.body;

        let user = await User.findOne({email}) //procura se ja tem o usuário no banco

        if(!user) { //se não tiver ele adiciona
            user = await User.create({ email })  //await para aguardar uma informação assíncrona
        }

        return res.json(user);
    }
}