import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddSubject } from 'src/app/features/it-administrator/models/IAddSubject.interface';
import { IAddSubjectToDepartment } from 'src/app/features/it-administrator/models/IAddSubjectToDepartment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  getSubjects() {
    return this.http.get(
      `${environment.APIBase}${environment.Subject.GetSubjects}`
    );
  }

  addSubject(model: IAddSubject) {
    return this.http.post(
      `${environment.APIBase}${environment.Subject.AddSubject}`,
      model
    );
  }

  getSubjectById(id: string) {
    return this.http.get(
      `${environment.APIBase}${environment.Subject.GetSubjectById}${id}`
    );
  }

  addSubjectToDepartment(model: IAddSubjectToDepartment) {
    return this.http.post(
      `${environment.APIBase}${environment.Subject.AddDepartmentSubjects}`,
      model
    );
  }

  getSubjectsCount() {
    return this.http.get(
      `${environment.APIBase}${environment.Subject.GetSubjectsCount}`
    );
  }

  deleteSubjectById(id: string) {
    return this.http.get(
      `${environment.APIBase}${environment.Subject.DeleteSubjectById}${id}`
    );
  }

  getSubjectsOfDepartment(id: string) {
    return this.http.get(
      `${environment.APIBase}${environment.Subject.GetSubjectsOfDepartment}${id}`
    );
  }
}
