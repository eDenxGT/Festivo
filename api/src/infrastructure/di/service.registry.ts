import { container } from 'tsyringe';
import { IPasswordService } from '../../domain/serviceInterfaces/password-service.interface';
import { PasswordService } from '../services/password.service';
import { JwtService } from '../services/jwt.service';
import { IJwtService } from '../../domain/serviceInterfaces/jwt-service.interface';

export class ServiceRegistry {
  static registerServices(): void {
    container.register<IPasswordService>('IPasswordService', {
      useClass: PasswordService
    });
    container.register<IJwtService>('IJwtService', {
      useClass: JwtService
    });
  }
}
