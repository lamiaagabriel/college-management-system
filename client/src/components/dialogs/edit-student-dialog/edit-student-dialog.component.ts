import { Component , ViewChild,OnInit,Inject} from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UploadImageService } from '@/services/upload-image/upload-image.service';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.css'],
  providers: [UploadImageService],
})
export class EditStudentDialogComponent {
  constructor(
    private matDialogRef: MatDialogRef<EditStudentDialogComponent>,
    private _uploadService: UploadImageService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit(): void {
    this.ssn = this.data.ssn;
    this.fullname = this.data.fullname;
    this.phonenumber = this.data.phonenumber;
    this.PersonGender = this.data.gender;
    this.PersonEmail = this.data.email;
    this.AcademicYear = this.data.academicyear;
    this.Address= this.data.address;
    this.data.fees === '0' ? this.FEES = false : this.FEES = true;
    this.Department = this.data.department;
    this.Password = this.data.password;
    this.PersonalPhotoURL = this.data.photourl;
    this.ImgSrc = 'https://res.cloudinary.com/dnbruhgqr/image/upload/v1683030639/PersonalPhotos/' +
    this.PersonalPhotoURL +
    '.jpg'
   /*
    this.DOB = `"${this.data.dateofbirth?.substr(0,4)}-${this.data.dateofbirth?.substr(5,2)}-${this.data.dateofbirth?.substr(8,2)}"`;
    console.log(typeof(this.DOB));
    console.log(this.DOB);
   */
  }
  fullname: string | null = null;
  ssn: string | null = null;
  phonenumber: string | null = null;
  PersonGender: string | null = null;
  PersonEmail: string | null = null;
  AcademicYear: string | null = null;
  Department: string | null = null;
  Password: string | null = null;
  DOB: string = '';
  serializedDate = new FormControl(
  new Date().toISOString()); // this.serializedDate.value
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
    this._uploadService.uploadImage(data).subscribe((res) => {
      if (res) {
        this.PersonalPhotoURL = res.secure_url;
      }
    });

     // Setting request attribtues
     this.fullname = this.form.value.personDetails.fullname;
     this.ssn = this.form.value.personDetails.ssn;
     this.phonenumber = this.form.value.personDetails.phonenumber;
     this.Address = this.form.value.personDetails.Address;
     this.AcademicYear = this.form.value.AcademicYear;
     this.Department = this.form.value.Department;
     this.Password = this.form.value.Password;
     this.PersonalPhotoURL = this.PersonalPhotoURL.substr(77, 20);
     this.DOB = this.serializedDate.value?.toString()!;
     this.DOB = this.convert(this.DOB);
    // Sending request
    const res = await fetch('http://localhost:3000/api/students', {
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
        academic_year: this.AcademicYear,
        address: this.Address,
        department: this.Department,
        fees: this.FEES,
        password: this.Password,
        image: this.PersonalPhotoURL,
      }),
    }).then((res) => res.json());

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
