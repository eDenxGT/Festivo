import { injectable } from 'tsyringe';
import { IOrganizerRepository } from '../../../../../domain/repositoryInterfaces/users/organizer-repository.interface';
import { BaseRepository } from '../base.repository';
import { IOrganizerModel, OrganizerModel } from '../../models/organizer.model';

@injectable()
export class OrganizerRepository
  extends BaseRepository<IOrganizerModel>
  implements IOrganizerRepository
{
  constructor() {
    super(OrganizerModel);
  }
}
