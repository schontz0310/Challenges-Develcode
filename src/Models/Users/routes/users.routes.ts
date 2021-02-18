import {Router} from 'express';
import multer from 'multer';

import UserController from '../controller/usersController'
import uploadConfig from '../../../config/upload'


const upload = multer(uploadConfig);

const userRouter =Router();
const userController = new UserController();

userRouter.get('/', userController.index);
userRouter.get('/:users_id', userController.show);
userRouter.post('/', upload.single('users_avatar'), userController.create);

export default userRouter;  