import express from 'express'
import ClassesController from './controllers/ClassesCntroller';
import ConnectionController from './controllers/ConnectionController';

const routes = express.Router();
const ClassesControllers = new ClassesController()
const ConnectionControllers = new ConnectionController()

routes.get('/classes', ClassesControllers.index);
routes.post('/classes', ClassesControllers.create);

routes.post('/connection', ConnectionControllers.create)
routes.get('/connection', ConnectionControllers.index)

export default routes
