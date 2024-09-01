import { DataTypes } from "sequelize";
import db from "../database/db.js";

export const Task = db.define('tasks', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false //esto de aqui es para que si no se especifica que el valor por defecto sea false y no sea nulo
    }
}, {
    timestamps: false
})