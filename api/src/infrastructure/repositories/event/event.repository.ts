import { injectable } from 'tsyringe';
import { BaseRepository } from '../base.repository';
import { EventModel, IEventModel } from '../../models/event.model';
import { IEventRepository } from '../../../domain/repositoryInterfaces/event/event-repository.interface';

@injectable()
export class EventRepository
  extends BaseRepository<IEventModel>
  implements IEventRepository
{
  constructor() {
    super(EventModel);
  }
}
