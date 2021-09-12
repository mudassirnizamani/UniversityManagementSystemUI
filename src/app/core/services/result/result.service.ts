import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICreateResult } from '../../models/ICreateResult.interface';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  constructor(private http: HttpClient) {}

  getResults() {
    return this.http.get(
      `${environment.APIBase}${environment.Result.GetResults}`
    );
  }

  addResult(model: ICreateResult) {
    return this.http.post(
      `${environment.APIBase}${environment.Result.AddResult}`,
      model
    );
  }

  getResultById(id: string) {
    return this.http.get(
      `${environment.APIBase}${environment.Result.GetResultById}${id}`
    );
  }

  getResultsCount() {
    return this.http.get(
      `${environment.APIBase}${environment.Result.GetResultsCount}`
    );
  }

  deleteResultById(id: string) {
    return this.http.get(
      `${environment.APIBase}${environment.Result.DeleteResultById}${id}`
    );
  }
}
