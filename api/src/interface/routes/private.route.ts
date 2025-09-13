import envConfig from '../../shared/config';
import { HTTP_STATUS } from '../../shared/constants';
import { BaseRoute } from './base/base.route';

export class PrivateRoutes extends BaseRoute {
  constructor() {
    super();
  }

  protected initializeRoutes(): void {
    //* ─────────────────────────────────────────────────────────────
    //*                   🛠️ Details Endpoints
    //* ─────────────────────────────────────────────────────────────
    this.router.get('/', (req, res) => res.status(200).json({ message: 'OK' }));
  }
}
