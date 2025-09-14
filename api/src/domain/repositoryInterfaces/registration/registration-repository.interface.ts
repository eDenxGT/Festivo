import { IRegistrationModel } from '../../../infrastructure/models/registration.model';
import { IRegistration } from '../../entities/registration.entity';
import { IBaseRepository } from '../base-repository.interface';

export interface IRegistrationRepository
  extends IBaseRepository<IRegistrationModel> {
  findByEventAndEmail(
    event_id: string,
    email: string
  ): Promise<IRegistration | null>;
}
