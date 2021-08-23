import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class SignoutService {
  constructor(private router: Router, private toastr: ToastrService) {}

  signout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.toastr.success('Successfully Signed out');
    this.router.navigateByUrl('/');
  }
}
