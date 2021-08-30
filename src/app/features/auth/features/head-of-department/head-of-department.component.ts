import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDeanAuth } from '../../models/IDeanAuth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-head-of-department',
  templateUrl: './head-of-department.component.html',
  styleUrls: ['./head-of-department.component.scss']
})
export class HeadOfDepartmentComponent implements OnInit {
  Form: FormGroup;
  isLoading: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.Form = new FormGroup(
      {
        userName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.pattern('^.+@gmail.com$'),
        ]),
        phoneNumber: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      this.passwordMatchingValidator
    );
  }

  // Validation function for Matching Password and Confirm Password - Mudasir Ali
  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value == fg.get('confirmPassword').value
      ? null
      : { notMatched: true };
  }

  get UserName(): FormControl {
    return this.Form.get('userName') as FormControl;
  }

  get FirstName(): FormControl {
    return this.Form.get('firstName') as FormControl;
  }

  get LastName(): FormControl {
    return this.Form.get('lastName') as FormControl;
  }

  get Email(): FormControl {
    return this.Form.get('email') as FormControl;
  }

  get RegNumber(): FormControl {
    return this.Form.get('regNumber') as FormControl;
  }

  get PhoneNumber(): FormControl {
    return this.Form.get('phoneNumber') as FormControl;
  }

  get Password(): FormControl {
    return this.Form.get('password') as FormControl;
  }

  get ConfirmPassword(): FormControl {
    return this.Form.get('confirmPassword') as FormControl;
  }
  
  onSubmit() {
    if (this.Form.invalid) {
      this.isLoading = true;
      this.toastr.error('Plz fill the fields correctly', 'Fields Error');
      this.isLoading = false;
    } else {
      this.isLoading = true;
      var model: IDeanAuth = {
        userName: this.UserName.value.toString(),
        firstName: this.FirstName.value.toString(),
        lastName: this.LastName.value.toString(),
        email: this.Email.value.toString(),
        phoneNumber: this.PhoneNumber.value.toString(),
        password: this.ConfirmPassword.value.toString(),
        profilePic: '/assets/images/users-default-profile-pic.jpg',
      };

      this.authService.HeadOfDepartment(model).subscribe(
        (res: any) => {
          if (res.succeeded) {
            this.toastr.success(
              `Account for '${this.UserName.value}' is successfully created`,
              'Account Successfully Created'
            );
            this.Form.reset();
            this.isLoading = false;
            this.router.navigateByUrl('auth/signin');
          } else if (!res.succeeded && res.error == 'ServerError') {
            this.toastr.error(res.description, 'Server Error');
            this.isLoading = false;
          } else {
            res.errors.forEach((element: any) => {
              switch (element.code) {
                case 'DuplicateUserName':
                  this.toastr.error(element.description, 'UserName Exists');
                  this.isLoading = false;
                  break;
                case 'DuplicateEmail':
                  this.toastr.error(element.description, 'Email Exists');
                  this.isLoading = false;
                  break;
                default:
                  this.toastr.error('Signup Failed', element.description);
                  this.isLoading = false;
                  break;
              }
            });
          }
        },
        (error: any) => {
          this.toastr.error("Server didn't respond", 'Server Error');
          this.isLoading = false;
        }
      );
    }
  }

}
