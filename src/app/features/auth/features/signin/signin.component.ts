import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { ISignin } from '../../models/ISignin.interface';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  Form: FormGroup;
  isLoading: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.Form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get Email(): FormControl {
    return this.Form.get('email') as FormControl;
  }

  get Password(): FormControl {
    return this.Form.get('password') as FormControl;
  }

  onSubmit() {
    if (this.Form.invalid) {
      this.isLoading = true;
      this.toastr.error('Plz fill the fields correctly', 'Fields Error');
      this.isLoading = false;
    } else {
      var model: ISignin = {
        password: this.Password.value.toString(),
        email: this.Email.value.toString(),
      };

      this.authService.Signin(model).subscribe(
        (res: any) => {
          if (!res.succeeded && res.code == 'EmailNotFound') {
            this.toastr.error(res.description, 'Email Not Found');
            this.isLoading = false;
          } else if (!res.succeeded && res.code == 'NotActivated') {
            this.toastr.error(res.description, 'InActive Account');
            this.isLoading = false;
          } else if (!res.succeeded && res.code == 'IncorrectPassword') {
            this.toastr.error(res.description, 'Incorrect Password');
            this.isLoading = false;
          } else if (!res.succeeded && res.code == 'InvalidCredentials') {
            this.toastr.error(res.description, 'Invalid Credentials');
            this.isLoading = false;
          } else if (!res.succeeded && res.code == 'ServerError') {
            this.toastr.error(res.description, 'Server Error');
            this.isLoading = false;
          } else if (res.succeeded) {
            localStorage.setItem('token', res.token);
            this.userService.GetUserRoleByEmail(model.email).subscribe(
              (res: any) => {
                if (!res.succeeded && res.code == 'UsernameNotFound') {
                  this.toastr.error(res.description, 'Role Not Found');
                  this.isLoading = false;
                } else if (!res.succeeded && res.code == 'ServerError') {
                  this.toastr.error(res.description, 'Role Not Found');
                  this.isLoading = false;
                } else if (res.succeeded) {
                  res.roles.forEach((role) => {
                    if (role == 'Student') {
                      localStorage.setItem('userType', 'Student');
                      this.Form.reset();
                      this.isLoading = false;
                      this.toastr.success(
                        `Successfully signin as ${model.email}`,
                        `Welcome to Student Dashboard`
                      );
                      this.router.navigateByUrl('/student');
                    } else if (role == 'ItAdministrator') {
                      localStorage.setItem('userType', 'ItAdministrator');
                      this.Form.reset();
                      this.isLoading = false;
                      this.toastr.success(
                        `Successfully signin as ${model.email}`,
                        `Welcome to It Administrator Dashboard`
                      );
                      this.router.navigateByUrl('/itadministrator');
                    } else if (role == 'Dean') {
                      localStorage.setItem('userType', 'Dean');
                      this.Form.reset();
                      this.isLoading = false;
                      this.toastr.success(
                        `Successfully signin as ${model.email}`,
                        `Welcome to It Dean Dashboard`
                      );
                      this.router.navigateByUrl('/dean');
                    } else if (role == 'CourseAdviser') {
                      localStorage.setItem('userType', 'CourseAdviser');
                      this.Form.reset();
                      this.isLoading = false;
                      this.toastr.success(
                        `Successfully signin as ${model.email}`,
                        `Welcome to CourseAdviser Dashboard`
                      );
                      this.router.navigateByUrl('/courseadviser');
                    } else if (role == 'HeadOfDepartment') {
                      localStorage.setItem('userType', 'HeadOfDepartment');
                      this.Form.reset();
                      this.isLoading = false;
                      this.toastr.success(
                        `Successfully signin as ${model.email}`,
                        `Welcome to HeadOfDepartment Dashboard`
                      );
                      this.router.navigateByUrl('/headofdepartment');
                    } else if (role == 'Admin') {
                      localStorage.setItem('userType', 'Admin');
                      this.Form.reset();
                      this.isLoading = false;
                      this.toastr.success(
                        `Successfully signin as ${model.email}`,
                        `Welcome to Admin Dashboard`
                      );
                      this.router.navigateByUrl('/admin');
                    } else if (role == 'SuperAdmin') {
                      localStorage.setItem('userType', 'SuperAdmin');
                      this.Form.reset();
                      this.isLoading = false;
                      this.toastr.success(
                        `Successfully signin as ${model.email}`,
                        `Welcome to SuperAdmin Dashboard`
                      );
                      this.router.navigateByUrl('/superadmin');
                    } else {
                      this.isLoading = false;
                      this.toastr.error(
                        `Sorry ${model.email}, We didn't found your Role`,
                        'Role Not Found'
                      );
                    }
                  });
                }
              },
              (error: any) => {
                this.isLoading = false;
                this.toastr.error("Server didn't respond", 'Plz try later');
              }
            );
          }
        },
        (error: any) => {
          this.isLoading = false;
          this.toastr.error("Server didn't respond", 'Plz try later');
        }
      );
    }
  }
}
