/* eslint-disable prettier/prettier */
import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields'
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength
} from 'class-validator'

export type UserRulesProps = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

export class UserRules {
  @MaxLength(255, { message: 'Name must be less than 255 characters' })
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name!: string

  @MaxLength(255, { message: 'Email must be less than 255 characters' })
  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email!: string

  @MaxLength(255, { message: 'Password must be less than 255 characters' })
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password!: string

  createdAt?: Date

  constructor(props: UserRulesProps) {
    Object.assign(this, props)
  }
}

export class UserValidator  extends ClassValidatorFields<UserRules> {
    validate(props: UserRulesProps): boolean {
        return super.validate(new UserRules(props ?? {} as UserRulesProps))
    }
}