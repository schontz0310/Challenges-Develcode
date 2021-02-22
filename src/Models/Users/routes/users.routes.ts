import {Router} from 'express';
import multer from 'multer';

import UserController from '../controller/usersController'
import UserAvatarController from '../controller/usersAvatarController'
import uploadConfig from '../../../config/upload'


const upload = multer(uploadConfig);

const userRouter =Router();
const userController = new UserController();
const userAvatarController = new UserAvatarController();

userRouter.get('/', userController.index);
userRouter.get('/:users_id', userController.show);
userRouter.post('/', upload.single('users_avatar'), userController.create);
userRouter.patch('/avatar/:users_id', upload.single('users_avatar'), userAvatarController.update);
userRouter.put('/:users_id', userController.update);

export default userRouter;  