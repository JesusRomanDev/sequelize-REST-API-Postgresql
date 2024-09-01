import express, { Router } from 'express';
import { createProject, deleteProject, getProject, getProjects, updateProject, getProjectTasks } from '../controllers/projects.controller.js';

const router = Router();

router.get('/projects', getProjects);
router.get('/projects/:id', getProject);
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

//Obteniendo las Tasks de un proyecto en especifico
router.get('/projects/:id/tasks', getProjectTasks);


export default router;