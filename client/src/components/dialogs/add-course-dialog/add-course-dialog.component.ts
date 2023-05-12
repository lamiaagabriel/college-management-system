import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-course-dialog',
  templateUrl: './add-course-dialog.component.html',
  styleUrls: ['./add-course-dialog.component.css']
})
export class AddCourseDialogComponent {
  constructor(
    private matDialogRef: MatDialogRef<AddCourseDialogComponent>,
  ) {}

  coursename: string | null = null;
  AcademicYear: String | null = null;
  Semester: String | null = null;
  Department: string | null = null;
  ID:String|null = null;
  response:String = "";
  
  @ViewChild('myForm') form: any = NgForm;

  async onSubmit() {
    // Setting request attribtues
    this.coursename = this.form.value.CourseDetails.coursename;
    this.AcademicYear = this.form.value.year;
    this.Semester = this.form.value.semester;
    this.ID = this.form.value.CourseDetails.courseID;


    // Sending request
    const res = await fetch('http://localhost:3000/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.coursename,
        year : this.AcademicYear,
        semester : this.Semester,
        id : this.ID,
      }),
    }).then((res) => res.json());
    this.response = res.results;
    console.log(this.response);
    if (this.response !== "Error in creating data within Database.")
    {
      location.reload();
    }
  }
  onClose() {
    this.matDialogRef.close();
  }
}
