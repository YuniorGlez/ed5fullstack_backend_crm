const UserModel = require("./auth.model");
const bcrypt = require('bcrypt')
module.exports = { login, register }



function login(req, res) {
    const { email , password} = req.body;

    return UserModel.findOne({ email })
        .then(userFound => {
            if (!userFound) return res.status(404).send('No existe ningún usuario con ese email o password');

            if (!bcrypt.compareSync(password, userFound.password)) {
                return res.status(404).send('No existe ningún usuario con ese email o password');
            }

            return res.send('Todo bien')

        })



}

function register(req, res) {
    const { email, password } = req.body;

    // TODO: Comprobar que ese email no esté repetido


    const passwordHash = bcrypt.hashSync(password, 4);
    
    return UserModel.create({ email, password: passwordHash })
        .then(newUser => {
            return res.send('Usuario creado con éxito')
        })
}