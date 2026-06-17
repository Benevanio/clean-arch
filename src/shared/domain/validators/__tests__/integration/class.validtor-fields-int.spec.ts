/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */

import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

import { ClassValidatorFields } from '../../class-validator-fields';

class ProductRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name!: string

  @IsNumber()
  @IsNotEmpty()
  price!: number

  constructor(props: { name: string; price: number }) {
    Object.assign(this, props)
  }
}

class StubClassValidatorFields extends ClassValidatorFields<ProductRules> {}

describe('ClassValidatorFields Integration Tests', () => {
  let validator: StubClassValidatorFields

  beforeEach(() => {
    validator = new StubClassValidatorFields()
  })

  it('should validate with errors', () => {
    const isValid = validator.validate(
      new ProductRules({
        name: '',
        price: 'invalid_price' as any,
      }),
    )

    expect(isValid).toBe(false)

    expect(validator.errors).toEqual({
      name: ['name should not be empty'],
      price: ['price must be a number conforming to the specified constraints'],
    })
  })

  it('should validate without errors', () => {
    const data = new ProductRules({
      name: 'valid_name',
      price: 10,
    })

    const isValid = validator.validate(data)

    expect(isValid).toBe(true)

    expect(validator.errors).toEqual({})

    expect(validator.validatedData).toEqual(data)
  })

  it('should return default error message when constraints are undefined', () => {
    validator.errors = {}

    const isValid = validator.validate(
      {} as ProductRules,
    )

    expect(isValid).toBe(false)
  })
})