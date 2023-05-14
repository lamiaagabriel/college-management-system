import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-studentdegree-dialog',
  templateUrl: './add-studentdegree-dialog.component.html',
  styleUrls: ['./add-studentdegree-dialog.component.css']
})
export class AddStudentdegreeDialogComponent {
  constructor(
    private matDialogRef: MatDialogRef<AddStudentdegreeDialogComponent>,
  ) {}

  CourseID: string | null = null;
  StudentID: String | null = null;
  StudentGrade:  number| null = null;
  response:String = "";
  
  @ViewChild('myForm') form: any = NgForm;

  async onSubmit() {
    // Setting request attribtues
    this.CourseID = this.form.value.CourseDetails.CourseID;
    this.StudentID = this.form.value.CourseDetails.StudentID;
    this.StudentGrade = this.form.value.CourseDetails.StudentGrade;
    // Sending request
    const res = await fetch('http://localhost:3000/api/studentCourses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        courseid: this.CourseID,
        studentid : this.StudentID,
        studentgrade : this.StudentGrade,
      }),
    }).then((res) => res.json());
    this.response = res.results;
    console.log(this.response);
    /*
    if (this.response !== "Error in creating data within Database.")
    {
      location.reload();
    }
  */
  }
  onClose() {
    this.matDialogRef.close();
  }
}
