import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'

export class UserRules {
  @MaxLength(255, { message: 'Name must be less than 255 characters' })
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name!: string

  @IsNumber({}, { message: 'Price must be a number' })
  @IsNotEmpty({ message: 'Price is required' })
  price!: number
}
