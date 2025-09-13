//* ====== Module Imports ====== *//
import { container } from 'tsyringe';

//* ====== Use Case Imports ====== *//
import { ISignUpUserUseCase } from '../../domain/usecaseInterfaces/auth/signup-user-usecase.interface';
import { SignUpUserUseCase } from '../../application/usecases/auth/signup-user.usecase';
import { ISignInUserUseCase } from '../../domain/usecaseInterfaces/auth/signin-user-usecase.interface';
import { SignInUserUseCase } from '../../application/usecases/auth/signin-user.usecase';
import { IRefreshTokenUseCase } from '../../domain/usecaseInterfaces/auth/refresh-token-usecase.interface';
import { RefreshTokenUseCase } from '../../application/usecases/auth/refresh-token.usecase';

export class UseCaseRegistry {
  static registerUseCases(): void {
    container.register<ISignUpUserUseCase>('ISignUpUserUseCase', {
      useClass: SignUpUserUseCase
    });
    container.register<ISignInUserUseCase>('ISignInUserUseCase', {
      useClass: SignInUserUseCase
    });
    container.register<IRefreshTokenUseCase>('IRefreshTokenUseCase', {
      useClass: RefreshTokenUseCase
    });
  }
}
