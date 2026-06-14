/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'

import { ClassValidatorFields } from '../../class-validator-fields'

class StubClassValidatorFields extends ClassValidatorFields<{
  name: string
  price: number
}> {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name!: string

  @IsNumber()
  @IsNotEmpty()
  price!: number

  validate(data: any): boolean {
    Object.assign(this, data)

    return super.validate(data)
  }
}

describe('ClassValidatorFields Integration Tests', () => {
  it('Should validate with errors', () => {
    const validator = new StubClassValidatorFields()

    const isValid = validator.validate({
      name: '',
      price: 'invalid_price',
    })

    expect(isValid).toBe(false)

    expect(validator.errors).toEqual({
      name: ['name should not be empty'],
      price: ['price must be a number conforming to the specified constraints'],
    })
  })

  it('Should validate without errors', () => {
    const validator = new StubClassValidatorFields()

    const isValid = validator.validate({
      name: 'valid_name',
      price: 10,
    })

    expect(isValid).toBe(true)

    expect(validator.errors).toEqual({})

    expect(validator.validatedData).toEqual({
      name: 'valid_name',
      price: 10,
    })
  })
})
