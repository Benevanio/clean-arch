export type FieldsErros = {
  [field: string]: string[]
}
export interface ValidatorFieldsInterface<PropsValidator> {
  errors: FieldsErros
  validatedData: PropsValidator
  validate(props: PropsValidator): boolean
}
