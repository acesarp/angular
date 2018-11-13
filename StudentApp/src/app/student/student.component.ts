import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';
import {Student} from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public studentArray:Student[] = [];

  constructor(private _studeSentrvice: StudentService) { }

  ngOnInit() {
    //this.getStudentsPromise(); 
    this.getStudentsObservable();
  }

  getStudentsPromise(): void {
    this._studeSentrvice.getStudentsPromise()
    .then(data => this.studentArray = data);
  }

  getStudentsObservable(): void {
    this._studeSentrvice.getStudentsObservable()
      .subscribe(
        data => this.studentArray= data,
        error => console.log(error)
      );
  }

}
