export interface IAppForm {
  formTitle: string
  formControls: IFormControl[]
  saveBtnTitle: string
  cancelBtnTitle: string
}

export interface IFormControl {
  name: string
  label: string
  value?: string
  placeholder?: string
  class?: string
  type: string
  radioOptions?: string[]
  validators: IValidator[]
  options?: IOption[]
}

export interface IValidator {
  validatorName: string
  message?: string
  required?: boolean
  pattern?: string
  minLength?: number | undefined
  maxLength?: number | undefined
  email?: boolean
}

export interface IOption {
  id?: number
  value?: string
}

