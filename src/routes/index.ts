import {Router} from 'express';
import userRouter from '../Models/Users/routes/users.routes'
import profileRouter from '../Models/Users/routes/profile.routes'

const routes = Router();

routes.use('/users', userRouter);
routes.use('/profile', profileRouter);

export default routes;