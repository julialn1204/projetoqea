//arquivo que faz conexoa com o banco de dados 
require("dotenv").config()

//ORN que auxilia na conexão com o banco de dados utilizando o javascript
const Sequelize = require('sequelize') // importando o sequelize

//constante que cria conexão
const connection = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
})

// para exportar o modo de conexão com o bnco de dados para poder utilizar no arquivo 
// index.js
module.exports = connection;