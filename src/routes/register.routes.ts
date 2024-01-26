import { Router } from 'express';

import { registerGameFactory } from '../useCases/RegisterGameFactory';

const registerRoutes = Router();

const registerController = registerGameFactory();

registerRoutes.post('/', registerController.handle);

export { registerRoutes };
