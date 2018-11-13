import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Student } from '../models/student';

@Injectable()
export class StudentService {
  private URL = "https://studentaapiapp.azurewebsites.net/api/studentsapi";

  constructor(public _https: Http) { }

  getStudentsPromise(): Promise<Student[]> {
    return this._https.get(this.URL)
      .toPromise().then(data => data.json() as Student[])
      .catch(this.handleError);
  }
/*
  addStudentsObservable(): Promise<Student[]> {

  }

  editStudentsObservable(): Promise<Student[]> {
    return this._https.put(this.URL)
      .toPromise().then(data=> data.json() as Student[])
      .catch(this.handleError);
  }

  deleteStudentsObservable(): {
    return this._https.delete(this.URL)
      .toPromise().then(data=> data.json() as Student[])
      .catch(this.handleError);
  }
  */
  getStudentsObservable() : Observable<Student[]> {
    return this._https.get(this.URL)
    .pipe(
      map(
        (response: Response) => response.json()
      )
    );
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}