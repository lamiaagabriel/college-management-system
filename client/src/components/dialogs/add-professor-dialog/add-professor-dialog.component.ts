import { UploadImageService } from '@/services/upload-image/upload-image.service';
import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UploadImageService } from '@/services/upload-image/upload-image.service';


@Component({
  selector: 'app-add-professor-dialog',
  templateUrl: './add-professor-dialog.component.html',
  styleUrls: ['./add-professor-dialog.component.css'],
})
export class AddProfessorDialogComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(
    private matDialogRef: MatDialogRef<AddProfessorDialogComponent>,
    private uploadImageService: UploadImageService,
  ) {}
  fullname: string | null = null;
  ssn: string | null = null;
  phonenumber: string | null = null;
  PersonGender: string | null = null;
  PersonEmail: string | null = null;
  Department: string | null = null;
  serializedDate = new FormControl(new Date().toISOString()); // this.serializedDate.value
  Address: string | null = null;
  fullData: boolean = true;
  university: string | null = null;
  master: string | null = null;
  phd: string | null = null;
  genders: string[] = ['Male', 'Female'];
  PersonalPhoto: File[] = [];
  PersonalPhotoURL: string = '';
  ImgSrc: string = '';
  response:String = "";


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

    this.uploadImageService.uploadImage(data).subscribe((res) => {
      if (res) {
        this.PersonalPhotoURL = res.secure_url;
      }
    });

    // Setting request attribtuesPersonalPhoto
    this.ssn = this.form.value.personDetails.ssn;
    this.fullname = this.form.value.personDetails.fullname;
    this.phonenumber = this.form.value.personDetails.phonenumber;
    this.Address = this.form.value.personDetails.Address;
    this.university = this.form.value.personDetails.university;
    this.phd = this.form.value.personDetails.phd;
    this.master = this.form.value.personDetails.master;
    this.Department = this.form.value.personDetails.Department;
    this.PersonalPhotoURL = this.PersonalPhotoURL.substr(77, 20);


    
    const res = await fetch('http://localhost:3000/api/professors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ssn: this.ssn,
        fullname: this.fullname,
        PersonEmail: this.PersonEmail,
        PhoneNumber: this.phonenumber,
        DOB: this.serializedDate.value?.toString().slice(0, 10),
        PersonGender: this.PersonGender,
        Address: this.Address, 
        department: this.Department,
        PersonalPhoto: this.PersonalPhotoURL,
        university: this.university,
        master: this.master,
        phd: this.phd,
      }),
    }).then((res) => res.json());
    this.response = res.results;

  }
 
  onClose() {
    this.matDialogRef.close();
  }
}
