import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAuthenticatedUser() {
    var tokenHeader = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get(
      environment.APIBase + environment.User.GetAuthenticatedUser,
      { headers: tokenHeader }
    );
  }

  GetUserRoleByUserName(userName: string) {
    return this.http.get(
      `${environment.APIBase}${environment.User.GetUserRoleByUserName}${userName}`
    );
  }

  GetUserById(id: string) {
    return this.http.get(
      `${environment.APIBase}${environment.User.GetUserById}${id}`
    );
  }

  GetUserRoleByEmail(email: string) {
    return this.http.get(
      `${environment.APIBase}${environment.User.GetUserRoleByEmail}${email}`
    );
  }

  getUserByUserName(userName: string) {
    return this.http.get(
      `${environment.APIBase}${environment.User.GetUserByUserName}${userName}`
    );
  }

  getUsersCount() {
    return this.http.get(
      `${environment.APIBase}${environment.User.GetUsersCount}`
    );
  }

  getUsers() {
    return this.http.get(`${environment.APIBase}${environment.User.GetUsers}`);
  }

  gerDeans() {
    return this.http.get(`${environment.APIBase}${environment.User.GetDeans}`);
  }

  getCourseAdvisers() {
    return this.http.get(
      `${environment.APIBase}${environment.User.GetCourseAdvisers}`
    );
  }

  getHeadOfDepartments() {
    return this.http.get(
      `${environment.APIBase}${environment.User.GetHeadOfDepartments}`
    );
  }
}
