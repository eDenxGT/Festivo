import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { UserSignUpDTO } from '../../application/dtos/user/input/signup.dto';
import { OrganizerSignUpDTO } from '../../application/dtos/organizer/input/signup.dto';
import { ISignUpUserUseCase } from '../../domain/usecaseInterfaces/auth/signup-user-usecase.interface';
import { handleSuccessResponse } from '../../shared/utils/helpers/response.handler';
import { SUCCESS_MESSAGES } from '../../shared/constants/success-messages.constants';
import { HTTP_STATUS } from '../../shared/constants';
import { ISignInUserUseCase } from '../../domain/usecaseInterfaces/auth/signin-user-usecase.interface';
import { UserSignInDTO } from '../../application/dtos/user/input/signin.dto';
import { setAuthCookies } from '../../shared/utils/helpers/cookie.helper';

@injectable()
export class AuthController {
  constructor(
    @inject('ISignUpUserUseCase')
    private _signUpUserUseCase: ISignUpUserUseCase,
    @inject('ISignInUserUseCase') private _signInUserUseCase: ISignInUserUseCase
  ) {}

  signUp = async (req: Request, res: Response): Promise<void> => {
    const data: UserSignUpDTO | OrganizerSignUpDTO = req.body;

    await this._signUpUserUseCase.execute(data);

    handleSuccessResponse(
      res,
      HTTP_STATUS.CREATED,
      SUCCESS_MESSAGES.SIGNUP_SUCCESSFUL
    );
  };

  signIn = async (req: Request, res: Response) => {
    const data: UserSignInDTO = req.body;

    const userData = await this._signInUserUseCase.execute(data);

    setAuthCookies(res, userData.accessToken, userData.refreshToken);

    handleSuccessResponse(
      res,
      HTTP_STATUS.OK,
      SUCCESS_MESSAGES.SIGNIN_SUCCESSFUL
    );
  };
}
