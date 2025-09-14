import { inject, injectable } from 'tsyringe';
import { ICreateEventUseCase } from '../../../domain/usecaseInterfaces/event/create-event-usecase.interface';
import { HTTP_STATUS } from '../../../shared/constants';
import { ERROR_MESSAGES } from '../../../shared/constants/error-messages.constants';
import { AppError } from '../../../shared/errors/AppError';
import { CreateEventDTO } from '../../dtos/event/input/create-event.dto';
import { IEventRepository } from '../../../domain/repositoryInterfaces/event/event-repository.interface';

@injectable()
export class CreateEventUseCase implements ICreateEventUseCase {
  constructor(
    @inject('IEventRepository') private _eventRepository: IEventRepository
  ) {}
  async execute(data: CreateEventDTO): Promise<void> {
    if (data.is_paid && !data.price) {
      throw new AppError(
        ERROR_MESSAGES.CLIENT.INVALID_PRICE,
        HTTP_STATUS.BAD_REQUEST
      );
    }
    await this._eventRepository.save(data);
  }
}
