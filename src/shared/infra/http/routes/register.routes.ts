import { Router } from 'express';

import { RegisterGameController } from '../../../../modules/games/useCases/registerGame/RegisterGameController';

const registerRoutes = Router();

const registerController = new RegisterGameController();

registerRoutes.post('/', registerController.handle);

export { registerRoutes };
