import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { UploadImageService } from '@/services/upload-image/upload-image.service';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.css'],
  providers: [UploadImageService],
})
export class AddStudentDialogComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(
    private matDialogRef: MatDialogRef<AddStudentDialogComponent>,
    private _uploadImageService: UploadImageService
  ) {}
  
  fullname: string | null = null;
  ssn: string | null = null;
  phonenumber: string | null = null;
  PersonGender: string | null = null;
  PersonEmail: string | null = null;
  AcademicYear: number | null = null;
  Department: string | null = null;
  Password: string | null = null;
  serializedDate = new FormControl(new Date().toISOString()); // this.serializedDate.value
  Address: string | null = null;
  fullData: boolean = true;
  genders: string[] = ['male', 'female'];
  FEES: boolean = false;
  PersonalPhoto: File[] = [];
  PersonalPhotoURL: string = '';
  ImgSrc: string = '';

  @ViewChild('myForm') form: any = NgForm;

  OnFileSelected(event: any) {
    this.PersonalPhoto.push(event.target.files[0]);
    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: any) => {
      this.ImgSrc = event.target.result;
    };
  }

  async onSubmit() {
    // Uploading Image

    const img = this.PersonalPhoto[0];
    const data = new FormData();
    data.append('file', img);
    data.append('upload_preset', 'CollegeSystem');
    data.append('cloud_name', 'dnbruhgqr');

    this._uploadImageService.uploadImage(data).subscribe((res: any) => {
      if (res) {
        this.PersonalPhotoURL = res.secure_url;
      }
    });

    // Setting request attribtues
    this.fullname = this.form.value.personDetails.fullname;
    this.ssn = this.form.value.personDetails.ssn;
    this.phonenumber = this.form.value.personDetails.phonenumber;
    this.Address = this.form.value.personDetails.Address;
    this.AcademicYear = +this.form.value.year;
    this.Department = this.form.value.Department;
    this.Password = this.form.value.Password;
    this.PersonalPhotoURL = this.PersonalPhotoURL.substr(77, 20);

    // Sending request
    const res = await fetch('http://localhost:3000/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ssn: this.ssn,
        name: this.fullname,
        phone_number: this.phonenumber,
        email: this.PersonEmail,
        gender: this.PersonGender,
        date_of_birth: this.serializedDate.value?.slice(0, 10),
        academic_year: this.AcademicYear,
        address: this.Address,
        department: this.Department,
        fees: this.FEES,
        password: this.Password,
        image: this.PersonalPhotoURL,
      }),
    }).then((res) => res.json());
    // this.form.reset();
  }

  onClose() {
    this.matDialogRef.close();
  }
}
