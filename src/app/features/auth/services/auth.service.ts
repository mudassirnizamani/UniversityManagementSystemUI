import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICourseAdviserAuth } from '../models/ICourseAdviserAuth.interface';
import { IDeanAuth } from '../models/IDeanAuth.interface';
import { IItAdministratorAuth } from '../models/IItAdministratorAuth';
import { ISignin } from '../models/ISignin.interface';
import { IStudentAuth } from '../models/IStudentAuth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  Student(model: IStudentAuth) {
    return this.http.post(
      `${environment.APIBase}${environment.Auth.Student}`,
      model
    );
  }

  CourseAdviser(model: ICourseAdviserAuth) {
    return this.http.post(
      `${environment.APIBase}${environment.Auth.CourseAdviser}`,
      model
    );
  }

  ItAdministrator(model: IItAdministratorAuth) {
    return this.http.post(
      `${environment.APIBase}${environment.Auth.ItAdministrator}`,
      model
    );
  }

  Dean(model: IDeanAuth) {
    return this.http.post(
      `${environment.APIBase}${environment.Auth.Dean}`,
      model
    );
  }

  HeadOfDepartment(model: IDeanAuth) {
    return this.http.post(
      `${environment.APIBase}${environment.Auth.HeadOfDepartment}`,
      model
    );
  }

  Admin(model: IDeanAuth) {
    return this.http.post(
      `${environment.APIBase}${environment.Auth.Admin}`,
      model
    );
  }

  SuperAdmin(model: IDeanAuth) {
    return this.http.post(
      `${environment.APIBase}${environment.Auth.SuperAdmin}`,
      model
    );
  }

  Signin(model: ISignin) {
    return this.http.post(
      `${environment.APIBase}${environment.Auth.Signin}`,
      model
    );
  }
}
