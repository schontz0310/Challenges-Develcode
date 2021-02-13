import {Router} from 'express';
import UserController from '../controller/usersController'

const userRouter =Router();
const userController = new UserController();

userRouter.post('/', userController.create);
userRouter.get('/', userController.index);

export default userRouter;