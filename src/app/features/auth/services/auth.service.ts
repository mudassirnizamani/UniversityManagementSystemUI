import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IStudentAuth } from '../features/models/IStudentAuth.inteface';

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
}
