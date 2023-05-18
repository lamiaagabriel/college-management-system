import { Component, ViewChild , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '@/services/api/api.service';
@Component({
  selector: 'app-add-studentdegree-dialog',
  templateUrl: './add-studentdegree-dialog.component.html',
  styleUrls: ['./add-studentdegree-dialog.component.css']
})
export class AddStudentdegreeDialogComponent {
  
  constructor(
    private matDialogRef: MatDialogRef<AddStudentdegreeDialogComponent>,
    private api: ApiService,
  ) {}

  CourseID: string | null = null;
  StudentID: String | null = null;
  StudentGrade:  number| null = null;
  response:String = "";
  Courses: Array<any> = [];
  Studens: Array<any> = [];
  @ViewChild('myForm') form: any = NgForm;
  ngOnInit(): void {
    this.api.get('courses').subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }
      this.Courses = JSON.parse(JSON.stringify(data));
    });

    this.api.get('students').subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }
      this.Studens = JSON.parse(JSON.stringify(data));
    });
    
  }
  
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
