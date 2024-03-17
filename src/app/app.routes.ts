import { Routes } from '@angular/router';
import {DynamicFormComponent} from "./form/component/dynamic-form/dynamic-form.component";
import {BuildFormComponent} from "./form/component/build-form/build-form.component";
import {OnBeforeDestroyGuard} from "./form/guard/on-before-destroy.guard";

export const routes: Routes = [
  {
    path: 'show-form',
    component: DynamicFormComponent
  },
  {
    path: 'build-form',
    component: BuildFormComponent,
    canDeactivate: [OnBeforeDestroyGuard]
  }
];
