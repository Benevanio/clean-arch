import { EntityValidationError } from '../validation-error'

describe('EntityValidationError', () => {
  it('should create error with correct message and name', () => {
    const mockValidatorError = {
      errors: {
        name: ['Name is required'],
      },
      validatedData: {},
      validate: jest.fn(),
    }

    const error = new EntityValidationError(mockValidatorError)

    expect(error.message).toBe('Entity validation error')
    expect(error.name).toBe('EntityValidationError')
  })

  it('should store validator error correctly in property "error"', () => {
    const mockValidatorError = {
      errors: {
        email: ['Invalid email'],
      },
      validatedData: { email: 'invalid' },
      validate: jest.fn(),
    }

    const error = new EntityValidationError(mockValidatorError)

    expect(error.error).toEqual(mockValidatorError)
  })

  it('should preserve reference of validator error object', () => {
    const mockValidatorError = {
      errors: {
        password: ['Too short'],
      },
      validatedData: { password: '123' },
      validate: jest.fn(),
    }

    const error = new EntityValidationError(mockValidatorError)

    expect(error.error).toBe(mockValidatorError)
  })

  it('should be instance of Error and EntityValidationError', () => {
    const mockValidatorError = {
      errors: {},
      validatedData: {},
      validate: jest.fn(),
    }

    const error = new EntityValidationError(mockValidatorError)

    expect(error instanceof Error).toBe(true)
    expect(error instanceof EntityValidationError).toBe(true)
  })
})
