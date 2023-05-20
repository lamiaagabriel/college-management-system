import { Component,ViewChild,OnInit,Inject} from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadImageService } from '@/services/upload-image/upload-image.service';

@Component({
  selector: 'app-edit-professor-dialog',
  templateUrl: './edit-professor-dialog.component.html',
  styleUrls: ['./edit-professor-dialog.component.css']
})
export class EditProfessorDialogComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(
    private matDialogRef: MatDialogRef<EditProfessorDialogComponent>,
    private _uploadService: UploadImageService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
  //  console.log(this.data);
    this.ssn = this.data.ssn;
    this.fullname = this.data.fullname;
    this.phonenumber = this.data.phonenumber;
    this.PersonGender = this.data.gender;
    this.PersonEmail = this.data.email;
    this.master = this.data.master;
    this.Address= this.data.address;
    this.phd= this.data.phd;
    this.Department = this.data.department;
    this.university = this.data.university;
    this.PersonalPhotoURL = this.data.photourl;
    this.ImgSrc = 'https://res.cloudinary.com/dnbruhgqr/image/upload/v1683030639/PersonalPhotos/' +
    this.PersonalPhotoURL +
    '.jpg'
    
  }

  fullname: string | null = null;
  ssn: string | null = null;
  phonenumber: string | null = null;
  PersonGender: string | null = null;
  PersonEmail: string | null = null;
  Department: string | null = null;
  serializedDate = new FormControl(new 
  Date(this.data.dateofbirth?.substr(0,4), this.data.dateofbirth?.substr(5,2) - 1, +this.data.dateofbirth?.substr(8,2) + 1).toISOString()); // this.serializedDate.value
  Address: string | null = null;
  fullData: boolean = true;
  university: string | null = null;
  master: string | null = null;
  phd: string | null = null;
  genders: string[] = ['male', 'female'];
  PersonalPhoto: File[] = [];
  PersonalPhotoURL: string = '';
  ImgSrc: string = '';
  response:String = "";
  DOB: string = '';


  @ViewChild('myForm') form: any = NgForm;

  OnFileSelected(event: any) {
    this.PersonalPhoto.push(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: any) => {
      this.ImgSrc = event.target.result;
    };

    // Uploading Image
    if (this.PersonalPhoto.length >= 1){
      const img = this.PersonalPhoto[0];
      const data = new FormData();
      data.append('file', img);
      data.append('upload_preset', 'CollegeSystem');
      data.append('cloud_name', 'dnbruhgqr');
      this._uploadService.uploadImage(data).subscribe((res) => {
        if (res) {
          this.PersonalPhotoURL = res.secure_url;
        }
      });
      this.PersonalPhotoURL = this.PersonalPhotoURL.substr(77, 20);
    }
  }

  async onSubmit() {
    

    // Setting request attribtues
    this.ssn = this.form.value.personDetails.ssn;
    this.fullname = this.form.value.personDetails.fullname;
    this.phonenumber = this.form.value.personDetails.phonenumber;
    this.Address = this.form.value.personDetails.Address;
    this.university = this.form.value.personDetails.university;
    this.phd = this.form.value.personDetails.phd;
    this.master = this.form.value.personDetails.master;
    this.Department = this.form.value.Department;
    this.DOB = this.serializedDate.value?.toString()!;
    this.DOB = this.convert(this.DOB);
    console.log(this.PersonalPhotoURL);

    const res = await fetch('http://localhost:3000/api/professors', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ssn: this.ssn,
        name: this.fullname,
        phone_number: this.phonenumber,
        email: this.PersonEmail,
        gender: this.PersonGender,
        date_of_birth: this.DOB,
        phd: this.phd,
        master: this.master,
        university: this.university,
        address: this.Address,
        department: this.Department,
        image: this.PersonalPhotoURL,
      }),
    }).then((res) => res.json());
    /*
    this.response = res.results;
    if (this.response !== "Error in creating data within Database.")
    {
      location.reload();
    }
    */
  }
  convert(str:string) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  onClose() {
    this.matDialogRef.close();
  }
}
