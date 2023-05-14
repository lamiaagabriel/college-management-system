import { UploadImageService } from '@/services/upload-image/upload-image.service';
import { Component, Inject, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-course-dialog',
  templateUrl: './edit-course-dialog.component.html',
  styleUrls: ['./edit-course-dialog.component.css']
})
export class EditCourseDialogComponent {
    constructor(
    private matDialogRef: MatDialogRef<EditCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  coursename: string | null = null;
  AcademicYear: String | null = null;
  Semester: String | null = null;
  Department: string | null = null;
  ID:String|null = null;
  response:String = "";
  
  @ViewChild('myForm') form: any = NgForm;

  ngOnInit(): void {
    console.log(this.data);
      this.coursename = this.data.coursename;
      this.AcademicYear = this.data.AcademicYear.toString();
      this.Semester = this.data.Semester.toString();
      this.ID = this.data.id;
      this.Department = this.data.Depyearartment;
  }

  async onSubmit() {
    // Setting request attribtues
    this.coursename = this.form.value.CourseDetails.coursename;
    this.AcademicYear = this.form.value.AcademicYear;
    this.Semester = this.form.value.semester;
    this.ID = this.form.value.CourseDetails.courseID;


    // Sending request
    const res = await fetch('http://localhost:3000/api/courses', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.coursename,
        year : this.AcademicYear,
        semester : this.Semester,
        id : this.ID,
        department : this.Department,
      }),
    }).then((res) => res.json());
    this.response = res.results;
    console.log(this.response);
  }
  onClose() {
    this.matDialogRef.close();
  }
}
