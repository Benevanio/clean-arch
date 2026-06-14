import { ClassValidatorFields } from '../../class-validator-fields'

class StubClassValidatorFields extends ClassValidatorFields<{
  field: string
}> {}

describe('ClassValidatorFields Unit Tests', () => {
  it('Should Initialize Errors And ValidatedData With Empty Values', () => {
    const validator = new StubClassValidatorFields()
    expect(validator.errors).toEqual({})
    expect(validator.validatedData).toEqual({})
  })

  it('Should validate with errrors', () => {
    const validator = new StubClassValidatorFields()
    jest.spyOn(validator, 'validateSync').mockReturnValue([
      {
        property: 'field',
        constraints: {
          isNotEmpty: 'field should not be empty',
        },
      },
    ])

    const isValid = validator.validate({ field: '' })
    expect(isValid).toBe(false)
    expect(validator.errors).toEqual({
      field: ['field should not be empty'],
    })
  })
  it('Should validate without errors', () => {
    const validator = new StubClassValidatorFields()
    jest.spyOn(validator, 'validateSync').mockReturnValue([])
    const isValid = validator.validate({ field: 'value' })
    expect(isValid).toBe(true)
    expect(validator.errors).toEqual({})
    expect(validator.validatedData).toEqual({ field: 'value' })
  })
  it('Should validate with errors without constraints', () => {
    const validator = new StubClassValidatorFields()
    jest.spyOn(validator, 'validateSync').mockReturnValue([
      {
        property: 'field',
        constraints: undefined,
      },
    ])

    const isValid = validator.validate({ field: '' })
    expect(isValid).toBe(false)
    expect(validator.errors).toEqual({
      field: ['Invalid value'],
    })
    expect(validator.validatedData).toEqual({})
    expect(validator.errors).toEqual({
      field: ['Invalid value'],
    })
  })
})
