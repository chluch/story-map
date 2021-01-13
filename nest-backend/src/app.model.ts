import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

// Api Request
export class GetUserRequest {
  username: string;
}

// Api Response
export class GetUserResponse {
  uid: string;
  username: string;
  email: string;
  creationDate: Date;
}

// Database Row
export class UserEntity {
  uid: string;
  username: string;
  email: string;
  date_created: Date;
}

export class CreateUserResponse {
  uid: string;
}

export class CreateUserRequest {
  @MinLength(2, {
    message: 'username is too short.',
  })
  @MaxLength(30, {
    message: 'username is too long',
  })
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
