const UserModel = require("./auth.model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = { login, register }



function login(req, res) {
    const { email , password} = req.body;

    return UserModel.findOne({ email })
        .then(userFound => {
            if (!userFound) return res.status(404).send('No existe ningún usuario con ese email o password');

            if (!bcrypt.compareSync(password, userFound.password)) {
                return res.status(404).send('No existe ningún usuario con ese email o password');
            }

            const token = jwt.sign({ email: userFound.email }, process.env.TOKEN_PASSWORD);



            return res.json({
                user: userFound,
                token : token
            })

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