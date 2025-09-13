import { authController } from '../../infrastructure/di/resolver';
import { decodeToken, verifyAuth } from '../middlewares/auth.middleware';
import { BaseRoute } from './base/base.route';
import asyncHandler from 'express-async-handler';

export class PrivateRoutes extends BaseRoute {
  constructor() {
    super();
  }

  protected initializeRoutes(): void {
    //* ─────────────────────────────────────────────────────────────
    //*                    🛠️ User Endpoints
    //* ─────────────────────────────────────────────────────────────
    this.router.post(
      '/user/logout',
      verifyAuth,
      asyncHandler(authController.logoutUser)
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
  }
}
