import { Sequelize } from "sequelize"; 

//Instanciando
const db = new Sequelize('projectsdb', 'postgres', 'root',{
    host: 'localhost',
    dialect: 'postgres'
})

export default db;