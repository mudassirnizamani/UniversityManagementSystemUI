import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddDepartment } from 'src/app/features/it-administrator/models/IAddDepartment.interface';
import { IAddDepartmentToFaculty } from 'src/app/features/it-administrator/models/IAddDepartmentToFaculty';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  getDepartments() {
    return this.http.get(
      `${environment.APIBase}${environment.Department.GetDepartments}`
    );
  }

  addDepartment(model: IAddDepartment) {
    return this.http.post(
      `${environment.APIBase}${environment.Department.AddDepartment}`,
      model
    );
  }

  getDepartmentById(id: string) {
    return this.http.get(
      `${environment.APIBase}${environment.Department.GetDepartmentById}${id}`
    );
  }

  deleteDepartmentById(id: string) {
    return this.http.get(
      `${environment.APIBase}${environment.Department.DeleteDepartmentById}${id}`
    );
  }

  addDepartmentToFaculty(model: IAddDepartmentToFaculty) {
    return this.http.post(
      `${environment.APIBase}${environment.Department.AddFacultyDepartments}`,
      model
    );
  }

  getDepartmentsOfFaculty(id: string) {
    return this.http.get(
      `${environment.APIBase}${environment.Department.GetDepartmentsOfFaculty}${id}`
    );
  }
}
