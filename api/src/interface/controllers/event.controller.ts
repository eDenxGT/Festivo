import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { ICreateEventUseCase } from '../../domain/usecaseInterfaces/event/create-event-usecase.interface';
import { CreateEventDTO } from '../../application/dtos/event/input/create-event.dto';
import { handleSuccessResponse } from '../../shared/utils/helpers/response.handler';
import { HTTP_STATUS } from '../../shared/constants';
import { SUCCESS_MESSAGES } from '../../shared/constants/success-messages.constants';
import { CustomRequest } from '../middlewares/auth.middleware';

@injectable()
export class EventController {
  constructor(
    @inject('ICreateEventUseCase')
    private _createEventUseCase: ICreateEventUseCase
  ) {}

  createEvent = async (req: Request, res: Response) => {
    const data: CreateEventDTO = req.body;

    const userData = (req as CustomRequest).user;

    await this._createEventUseCase.execute({
      ...data,
      organizer_id: userData.id
    });

    handleSuccessResponse(
      res,
      HTTP_STATUS.CREATED,
      SUCCESS_MESSAGES.EVENT_CREATION_SUCCESS
    );
  };
}
