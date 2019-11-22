import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

// import User from './app/models/User'; //exemplo
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import AvailableController from './app/controllers/AvailableConroler';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import authMiddelware from './app/middlewares/auth';

const routes = new Router(); // Importado logo acima
const upload = multer(multerConfig);

// exemplo
// routes.get('/', async (req, res) => {
//    const user = await User.create({
//        name: 'Renan Fortunato',
//        email: 'renan@renan.com',
//        password_hash: '123456',
//    });
//
//    return res.json(user);
// });

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddelware); // Passando middleware como global

routes.put('/users', UserController.update);

// exemplo de upload de arquivo
// routes.post('/files', upload.single('file'), (req, res) => {
//    return res.json({ message: true });
// });

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduleController.index);
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

// module.exports = routes;
export default routes;
