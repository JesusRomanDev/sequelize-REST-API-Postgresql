import express from 'express';
import db from './database/db.js';
// import './models/Project.js'
// import './models/Task.js'
import routerProjects from './routes/projects.routes.js';
import routerTasks from './routes/tasks.routes.js';
const app = express();

const PORT = process.env.PORT || 3000;

db.authenticate()
    .then(()=>{
        db.sync();
        console.log(`Base de datos conectada con exito`);
    })
    .catch(error => console.log(error))

//Middleware para aceptar JSONs
app.use(express.json());

app.use('/', routerProjects);
app.use('/tasks', routerTasks);

app.listen(PORT, () => {
    console.log(`Escuchando por el puerto ${PORT}`);
})
