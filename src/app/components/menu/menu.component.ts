import { Component, OnInit } from '@angular/core';
import {StudentInputFormComponent} from '../student-input-form/student-input-form.component';
import {MatDialog} from '@angular/material/dialog';
import {Student} from '../../models/student';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  student: Student;

  constructor(private dialog: MatDialog, private studentService: StudentService) { }

  ngOnInit() {
  }

  openCreateStudentDialog() {
    const dialogRef = this.dialog.open(StudentInputFormComponent, {width: '250px'});
    dialogRef.afterClosed().subscribe(result => {
      this.student = result;
      if (this.student.name && this.student.email) {
        this.studentService.addStudent(this.student).subscribe();
      }
    });
  }

  makeRequest() {

  }
}
