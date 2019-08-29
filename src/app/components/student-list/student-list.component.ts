import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import {Student} from '../../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: Student[];
  studentCount: number;

  constructor( private studentService: StudentService) { }

  ngOnInit() {
    this.getStudentList();
    this.getStudentCount();
  }

  getStudentList(): void {
    this.studentService.getStudents()
      .subscribe( students =>
        this.studentList = students);
  }

  getStudentCount(): void{
    this.studentService.countStudents()
      .subscribe(count =>
        this.studentCount = count
      );
  }
}
