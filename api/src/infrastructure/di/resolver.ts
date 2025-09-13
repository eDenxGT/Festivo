//* ====== Module Imports ====== *//
import { container } from 'tsyringe';

import { DependencyInjection } from './index';

//* ====== Controller Imports ====== *//
import { AuthController } from '../../interface/controllers/auth.controller';

// Registering all registries using a single class
DependencyInjection.registerAll();

export const authController = container.resolve(AuthController);
