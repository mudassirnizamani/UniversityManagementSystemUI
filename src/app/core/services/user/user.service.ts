import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  GetUserRoleByUserName(userName: string) {
    return this.http.get(
      `${environment.APIBase}${environment.User.GetUserRoleByUserName}${userName}`
    );
  }

  GetUserRoleByEmail(email: string) {
    return this.http.get(
      `${environment.APIBase}${environment.User.GetUserRoleByEmail}${email}`
    );
  }
}
