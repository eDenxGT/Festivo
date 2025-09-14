import { CreateEventDTO } from '../../application/dtos/event/input/create-event.dto';
import {
  authController,
  eventController
} from '../../infrastructure/di/resolver';
import { decodeToken, verifyAuth } from '../middlewares/auth.middleware';
import { validateDTO } from '../middlewares/validate-dto.middleware';
import { BaseRoute } from './base/base.route';
import asyncHandler from 'express-async-handler';

export class PrivateRoutes extends BaseRoute {
  constructor() {
    super();
  }

  protected initializeRoutes(): void {
    //* ─────────────────────────────────────────────────────────────
    //*                 🛠️ Events Endpoints
    //* ─────────────────────────────────────────────────────────────
    this.router
      .route('/events')
      .post(
        verifyAuth,
        validateDTO(CreateEventDTO),
        asyncHandler(eventController.createEvent)
      );

    //* ─────────────────────────────────────────────────────────────
    //*                    🛠️ User Endpoints
    //* ─────────────────────────────────────────────────────────────

    //* ─────────────────────────────────────────────────────────────
    //*                🛠️ Token Refreshing Endpoint
    //* ─────────────────────────────────────────────────────────────
    this.router.post(
      '/refresh-token',
      decodeToken,
      authController.handleTokenRefresh
    );

    this.router.post(
      '/logout',
      verifyAuth,
      asyncHandler(authController.logoutUser)
    );
  }
}
