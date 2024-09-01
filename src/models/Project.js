//Para poder usar los tipos de datos de sequelize
import { DataTypes } from "sequelize";
//Sequelize requiere para poder crear una tabla es una conexion a la base de datos
import db from "../database/db.js";

//Para indicar la relacion entre una tabla y otra
import { Task } from "./Task.js";

//Comenzamos a definir nuestra tabla
export const Project = db.define('projects', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    priority:{
        type: DataTypes.INTEGER
    },
    description:{
        type: DataTypes.STRING
    }
})

//Hay que recordar que sequelize por defecto agregar 2 campos mas que son createdAt y uploadedAt, si no queremos que las crea
//podemos agregar timestramps: false

//Project tiene muchos de otro modelo, osease de 1 a muchos, por lo tanto Project tiene muchos Tasks o 1 proyecto tiene muchas tareas
Project.hasMany(Task,{
    foreignKey: 'projectId',
    sourceKey: 'id'
})

//Muchas tareas pertenecen a 1 solo proyecto
Task.belongsTo(Project, {
    foreignKey: 'projectId', 
    targetId: 'id'
})