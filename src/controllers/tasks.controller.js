import { Task } from "../models/Task.js";


const getTasks = async(req, res) => {
    const tasks = await Task.findAll();
    return res.json(tasks);
}
const getTask = async(req, res) => {
    const {id} = req.params;
    //Attributes nos sirve para devolver solo este atributo/propiedad, entonces solo me regresara el name, y omitira el done
    const existe = await Task.findOne({where: {id: id}, attributes:['name']})
    return res.json(existe);
}

const createTask = async(req, res) => {
    const {name, done, projectId} = req.body;
    console.log(req.body);
    const newTask = await Task.create({name, done, projectId});
    return res.json(newTask);
}

const updateTask = async(req, res) => {
    console.log(req.body);
    const {id} = req.params;
    
    const taskUpdated = await Task.findOne({where: {id: id}});
    //Seteandolo desde el req.body
    //set nos ayuda a que ubica y solo cambia los campos que se modificaron, si no se cambio nada de algun atributo/propiedad asi se deja
    taskUpdated.set(req.body);
    await taskUpdated.save();
    return res.json(taskUpdated);
}

const deleteTask = async(req, res) => {
    const {id} = req.params;
    const deleted = await Task.destroy({
        where: {id: id}
    })
    return res.state(200);
}
export {createTask, getTasks, getTask, updateTask, deleteTask};