import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Student'
    ) {
      this.router.navigateByUrl('/student');
      return false;
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'ItAdministrator'
    ) {
      this.router.navigateByUrl('/itadministrator');
      return false;
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Dean'
    ) {
      this.router.navigateByUrl('/dean');
      return false;
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'CourseAdviser'
    ) {
      this.router.navigateByUrl('/courseadviser');
      return false;
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'HeadOfDepartment'
    ) {
      this.router.navigateByUrl('/headofdepartment');
      return false;
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Admin'
    ) {
      this.router.navigateByUrl('/admin');
      return false;
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'SuperAdmin'
    ) {
      this.router.navigateByUrl('/superadmin');
      return false;
    } else {
      return true;
    }
  }
}
