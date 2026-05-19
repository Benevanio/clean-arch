/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import {
    validateSync,
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
    const errors: ValidationError[] = validateSync(this, {
      skipMissingProperties: false,
    })

    errors.forEach((error: ValidationError) => {
      const field = error.property
      const constraints = error.constraints

      if (constraints) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        this.errors[field] = Object.values(constraints)
      }else {
        this.errors[field] = ['Invalid value']
      }
    })

    if (errors.length === 0) {
      this.validatedData = props
    }

    return errors.length === 0
  }

}