import {BuildFormComponent} from "../component/build-form/build-form.component";
import {CanDeactivateFn} from "@angular/router";
import {EMPTY, Observable} from "rxjs";
import Swal from "sweetalert2";
import {inject} from "@angular/core";
import {FormService} from "../service/form.service";

export const OnBeforeDestroyGuard: CanDeactivateFn<BuildFormComponent>
  = (component: BuildFormComponent): Observable<boolean> | Promise<boolean> | boolean => {
  // return true;
  const fs = inject(FormService);

  return Swal.fire({
    title: 'خروج',
    text: 'تغییرات ذخیره نشده دارید، آیا از خروج اطمینان دارید؟',
    showCloseButton: true,
    showDenyButton: true,
    confirmButtonText: 'ذخیره',
    denyButtonText: 'خروج',
  }).then((result) => {
    // if (result.isDenied) {
    // }
    return true;
  });
}
