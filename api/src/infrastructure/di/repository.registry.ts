//* ====== Module Imports ====== *//
import { container } from 'tsyringe';
import { IUserRepository } from '../../domain/repositoryInterfaces/users/user-repository.interface';
import { UserRepository } from '../database/mongoDb/repositories/users/user.repository';
import { IOrganizerRepository } from '../../domain/repositoryInterfaces/users/organizer-repository.interface';
import { OrganizerRepository } from '../database/mongoDb/repositories/users/organizer.repository';

//* ====== Repository Imports ====== *//

export class RepositoryRegistry {
  static registerRepositories(): void {
    container.register<IUserRepository>('IUserRepository', {
      useClass: UserRepository
    });
    container.register<IOrganizerRepository>('IOrganizerRepository', {
      useClass: OrganizerRepository
    });
  }
}
