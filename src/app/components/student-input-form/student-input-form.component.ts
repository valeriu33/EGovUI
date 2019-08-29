import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Student} from '../../models/student';

@Component({
  selector: 'app-student-input-form',
  templateUrl: './student-input-form.component.html',
  styleUrls: ['./student-input-form.component.css']
})
export class StudentInputFormComponent implements OnInit {

  student: Student;

  constructor(public dialogRef: MatDialogRef<StudentInputFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Student) { }

  ngOnInit() {

  }

  createStudent(pName: string, pEmail: string) {
    if (pName.length >= 3 && pEmail.includes('@') && pEmail.includes('.')) {
      this.data = {name: pName, email: pEmail} as Student;
      this.dialogRef.close(this.data);
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}
