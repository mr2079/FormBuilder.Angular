import {Component, inject, Input, OnInit} from '@angular/core';
import {IAppForm, IFormControl, IValidator} from "../../interface/form.interface";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {registerFormConfig} from "../../constant/form.constant";
import {FormService} from "../../service/form.service";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  @Input() form !: IAppForm | undefined
  formBuilder = inject(FormBuilder)
  private _formService = inject(FormService)
  dynamicFormGroup: FormGroup = this.formBuilder.group({})

  ngOnInit(): void {
    if (!this.form)
      this.form = this._formService.customForm.value;

    if (this.form?.formControls) {
      // @ts-ignore
      let formGroup: FormGroup = {}

      this.form.formControls.forEach((control: IFormControl) => {
        let controlValidators: any = []
        if (control.validators) {
          control.validators.forEach((validator: IValidator) => {
            if (validator.required) controlValidators.push(Validators.required)
            if (validator.email) controlValidators.push(Validators.email)
            if (validator.minLength) controlValidators.push(Validators.minLength(validator.minLength))
            if (validator.maxLength) controlValidators.push(Validators.maxLength(validator.maxLength))
            if (validator.pattern) controlValidators.push(Validators.pattern(validator.pattern))
          })
        }
        // @ts-ignore
        formGroup[control.name] = [control.value, controlValidators]
      })

      this.dynamicFormGroup = this.formBuilder.group(formGroup)
    }
  }

  getValidationErrors(control: IFormControl):string {
    const formControl = this.dynamicFormGroup.get(control.name)
    let errorMessage: string = ''
    control.validators.forEach((validator: IValidator) => {
      if (formControl?.hasError(validator.validatorName)) {
        errorMessage = validator.message as string
      }
    })
    return errorMessage
  }

  onSubmit() {
    console.log(this.dynamicFormGroup.value)
  }
}
