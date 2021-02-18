import {Router} from 'express';
import ProfileController from '../controller/profileController'

const profileRouter =Router();
const profileController = new ProfileController();

profileRouter.get('/:users_id', profileController.show);
profileRouter.delete('/:users_id', profileController.delete);

export default profileRouter;