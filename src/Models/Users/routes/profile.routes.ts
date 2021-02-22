import {Router} from 'express';
import ProfileController from '../controller/profileController'

const profileRouter =Router();
const profileController = new ProfileController();

profileRouter.delete('/:users_id', profileController.delete);

export default profileRouter;