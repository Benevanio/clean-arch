/* eslint-disable prettier/prettier */

import {
  validateSync as classValidatorValidateSync,
  ValidationError,
} from 'class-validator'

import {
  FieldsErros,
  ValidatorFieldsInterface,
} from './validator-fields.interface'

export abstract class ClassValidatorFields<PropsValidator>
  implements ValidatorFieldsInterface<PropsValidator>
{
  errors: FieldsErros = {}

  validatedData: PropsValidator = {} as PropsValidator

  validate(props: PropsValidator): boolean {
    this.errors = {}

    const errors: ValidationError[] = classValidatorValidateSync(props as object, {
      skipMissingProperties: false,
    })

    errors.forEach((error: ValidationError) => {
      const field = error.property
      const constraints = error.constraints

      if (constraints) {
        this.errors[field] = Object.values(constraints)
      } else {
        this.errors[field] = ['Invalid value']
      }
    })

    if (errors.length === 0) {
      this.validatedData = props
    }

    return errors.length === 0
  }
}