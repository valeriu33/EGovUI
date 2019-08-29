import { Injectable } from '@angular/core';
import {Student} from '../models/student';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = '/api/students';

  constructor(
    private http: HttpClient
  ) { }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(this.studentsUrl.concat('/', id.toString()));
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student, httpOptions);
  }

  etidStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.studentsUrl, student, httpOptions);
  }

  countStudents(): Observable<number> {
    return this.http.get<number>(this.studentsUrl + '/count');
  }
}
