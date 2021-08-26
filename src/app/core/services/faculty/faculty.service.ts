import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddFaculty } from 'src/app/features/it-administrator/models/IAddFaculty.inteface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FacultyService {
  constructor(private http: HttpClient) {}

  getFaculties() {
    return this.http.get(
      `${environment.APIBase}${environment.Faculty.GetFaculties}`
    );
  }

  addFaculty(model: IAddFaculty) {
    return this.http.post(
      `${environment.APIBase}${environment.Faculty.AddFaculty}`,
      model
    );
  }

  getFacultyById(id: string) {
    return this.http.get(
      `${environment.APIBase}${environment.Faculty.GetFacultyById}${id}`
    );
  }

  deleteFacultyById(id: string) {
    return this.http.get(
      `${environment.APIBase}${environment.Faculty.DeleteFacultyById}${id}`
    );
  }
}
