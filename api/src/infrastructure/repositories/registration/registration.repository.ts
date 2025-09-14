import { injectable } from 'tsyringe';
import {
  IRegistrationModel,
  RegistrationModel
} from '../../models/registration.model';
import { IRegistrationRepository } from '../../../domain/repositoryInterfaces/registration/registration-repository.interface';
import { BaseRepository } from '../base.repository';
import { IRegistration } from '../../../domain/entities/registration.entity';

@injectable()
export class RegistrationRepository
  extends BaseRepository<IRegistrationModel>
  implements IRegistrationRepository
{
  constructor() {
    super(RegistrationModel);
  }

  async findByEventAndEmail(
    event_id: string,
    email: string
  ): Promise<IRegistration | null> {
    const registration = await this.model.findOne({
      $and: [{ event_id }, { 'participant_details.email': email }]
    });

    if (!registration) return null;

    return {
      ...registration,
      id: registration?._id.toString()!
    };
  }
}
