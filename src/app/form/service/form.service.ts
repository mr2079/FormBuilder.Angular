import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IAppForm, IFormControl, IValidator} from "../interface/form.interface";
import {registerFormConfig} from "../constant/form.constant";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  customForm: BehaviorSubject<IAppForm>;
  constructor() {
    this.customForm = new BehaviorSubject<IAppForm>({
      cancelBtnTitle: "",
      formControls: [],
      formTitle: "",
      saveBtnTitle: ""
    })
    // this.customForm.next(registerFormConfig)
  }

  addForm(form: IAppForm) {
    this.customForm?.next(form)
  }
  addFormControl(formControl: IFormControl) {
    this.customForm?.subscribe(value => {
      value.formControls.push(formControl)
    })
  }
}
