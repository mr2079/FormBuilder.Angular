import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DynamicFormComponent} from "./form/component/dynamic-form/dynamic-form.component";
import {FormService} from "./form/service/form.service";
import {registerFormConfig} from "./form/constant/form.constant";
import {IAppForm} from "./form/interface/form.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    DynamicFormComponent
  ],
  providers: [
    FormService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-builder';
}
