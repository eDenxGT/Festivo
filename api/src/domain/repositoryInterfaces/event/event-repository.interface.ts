import { IEventModel } from '../../../infrastructure/models/event.model';
import { IBaseRepository } from '../base-repository.interface';

export interface IEventRepository extends IBaseRepository<IEventModel> {}
