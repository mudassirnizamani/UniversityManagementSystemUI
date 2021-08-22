import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICourseAdviserAuth } from '../models/ICourseAdviserAuth.interface';
import { IItAdministratorAuth } from '../models/IItAdministratorAuth';
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
}
