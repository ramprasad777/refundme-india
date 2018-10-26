import { Injectable } from '@angular/core';

declare var toastr: any
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { }

  Success(title: string, message?: string) {
    this.setting()
    toastr.success(title, message);
  }

  Error(title: string, message?: string) {
    this.setting()
    toastr.error(title, message);
  }

  Warning(title: string, message?: string) {
    toastr.warning(title, message);
  }

  Info(title: string, message?: string) {
    toastr.info(title, message);
  }

  Clear(){
    toastr.clear();
  }

  setting() {
  toastr.options = {
    "maxOpened" : 1,
    "autoDismiss": true,
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "800",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
}
}
