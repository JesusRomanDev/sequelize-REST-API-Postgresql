import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

const getProjects =  async (req, res) => {
    try {
        //Lo de abajo es asincrono porque es una consulta
        const allProjects = await Project.findAll();
        console.log(allProjects);
        res.json(allProjects);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const getProject = async (req,res)=>{
    const {id} = req.params;
    try {
        if(!id) throw new Error("No hay id especificado");
        const existe = await Project.findOne({where: {id: id}})
        if(existe){
            return res.status(200).json(existe);        
        }
        throw new Error("Proyecto no existe")
    } catch (error) {
        return res.send(error.message)
    }
}

const createProject = async (req, res) => {
    console.log(req.body);
    const {name, priority, description} = req.body;
    
    try {
        if([name, priority, description].some(el => el === undefined)){
            //Usando throw new error comun
            throw new Error('Campo faltante')
            //Usando throw para mas personalizado, pero se recomienda algo sencillo como lo de arriba
            // throw {
            //     message: "Algo salió mal",
            //     status: 404,
            //     stack: new Error().stack // Opcional: captura la pila de llamadas
            //   };
        }
        const newProject = await Project.create({
            name, 
            priority,
            description
        })

        res.json(newProject);        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

    
}

const updateProject = async(req, res) => {
    const {id} = req.params;
    const {name, priority, description} = req.body;

    try {
        //Usando metodos de instancia findByPk y save
        //Esto significa que estamos modificando directamente las propiedades y luego le damos a save
        const project = await Project.findByPk(id);
        project.name = name;
        project.priority = priority;
        project.description = description;
    
        //Una vez actualizado guardalo en la DB
        await project.save();

        return res.json(project);
        //Tambien podemos usar update
        // const [updated] = await Project.update(
        //     { name, priority, description },
        //     { where: { id } }
        // );
        // const updatedProject = await Project.findByPk(id);
        // return res.json(updatedProject);

    } catch (error) {
        return res.send(400).json({message: "No existe este proyecto"})
    }


}

const deleteProject = async(req, res) => {
    const {id} = req.params;
    console.log(id);
    
    try {
        const existe = await Project.findOne({where: {id: id}})
        if(existe){
            await Project.destroy({
                where: {id: id}
            });
            return res.status(200).json({message: "Proyecto eliminado con exito"})        
        }
        throw new Error("Proyecto no existe")
    } catch (error) {
        return res.send(error.message)
    }
}

const getProjectTasks = async (req,res) => {
    const {id} = req.params;
    const tasksByProject = await Task.findOne({where: {projectId: id}})
    return res.json(tasksByProject);
}

export {getProjects, getProject, createProject, updateProject, deleteProject, getProjectTasks}