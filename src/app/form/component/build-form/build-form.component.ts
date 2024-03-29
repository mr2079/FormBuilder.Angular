import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormService} from "../../service/form.service";
import Swal from 'sweetalert2'
import {BehaviorSubject} from "rxjs";
import {IAppForm} from "../../interface/form.interface";
import {NgClass, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DynamicFormComponent} from "../dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-build-form',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule,
    DynamicFormComponent,
    NgIf
  ],
  templateUrl: './build-form.component.html',
  styles:['.blur{filter:blur(2px);}']
})
export class BuildFormComponent {
  protected myForm: BehaviorSubject<IAppForm> | undefined
  private _formService = inject(FormService)

  myFormCreateForm = new FormGroup({
    formTitle: new FormControl('', [Validators.required])
  })
  myFormCreateFormControl= new FormGroup({
    name: new FormControl('', [Validators.required]),
    label: new FormControl('', [Validators.required]),
    type: new FormControl('text', [Validators.required]),
  })

  createForm() {
    this.myForm = new BehaviorSubject<IAppForm>({
      cancelBtnTitle: "", formControls: [], formTitle: "", saveBtnTitle: ""
    })

    this.myForm?.next({
      formTitle: this.myFormCreateForm.get('formTitle')?.value as string,
      formControls: [],
      saveBtnTitle: 'تایید',
      cancelBtnTitle: 'انصراف'
    })

    // this._formService.addForm(this.myForm?.value as IAppForm)
  }

  createFormControl() {
    this.myForm?.subscribe((value) => {
      value.formControls.push({
        name: this.myFormCreateFormControl.get('name')?.value as string,
        label: this.myFormCreateFormControl.get('label')?.value as string,
        type: this.myFormCreateFormControl.get('type')?.value as string,
        validators: []
      })
    })
  }

  deleteFormControl(){

  }

  // reset() {
  // }
}
