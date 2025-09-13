import { IUserModel } from '../../../infrastructure/database/mongoDb/models/user.model';
import { IUser } from '../../entities/user.entity';
import { IBaseRepository } from '../base-repository.interface';

export interface IUserRepository extends IBaseRepository<IUserModel> {}
