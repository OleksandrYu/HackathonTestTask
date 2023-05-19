const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();
const Models = require('../models/db/Models')

const generateAccessToken = (email) => {
    const payload = {
        email
    }
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "24h"} )
}

class authController {
    async registration(req, res) {
        try {
            const {login, email,  password, name} = req.body;
            const usersModel = Models.userinfo;
            const candidate = await usersModel.findOne({where: {login: login}})
            if (candidate) {
                return res.status(400).json({message: "User with this login exists"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const user =await usersModel.create({ login: login, email: email, password:hashPassword, name:name });

            return res.json(token)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res) {
        try {
            const {login, email,  password, name} = req.body;
            const usersModel = Models.userinfo;
            const user = await usersModel.findOne({where: {login: login}})
            if (!user) {
                return res.status(400).json({message: `User not found`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: `Wrong password`})
            }
            const token = generateAccessToken(email)
            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }
    
}

module.exports = new authController()
