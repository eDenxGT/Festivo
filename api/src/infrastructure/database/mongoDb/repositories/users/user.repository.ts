import { injectable } from 'tsyringe';
import { IUserRepository } from '../../../../../domain/repositoryInterfaces/users/user-repository.interface';
import { BaseRepository } from '../base.repository';
import { IUserModel, UserModel } from '../../models/user.model';

@injectable()
export class UserRepository
  extends BaseRepository<IUserModel>
  implements IUserRepository
{
  constructor() {
    super(UserModel);
  }
}
