import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  error: string = '';
  datalabel: string = 'Name';
  password: string = '';
  uname_id: string = '';
  admins = [
    { name: 'Project Team', pass: '12345' },
    // { name: 'Marwa', password: '512001' },
    { name: 'admin', password: 'admin' },
  ];
  imgSource: string = '../../assets/admin.png';

  @ViewChild('myForm') form: any = NgForm;

  async onSubmit() {
    let admin = document.querySelector('input[id="admin"]:checked'); // That returns null if the admin radio button is not selected
    if (this.uname_id === '' || this.password === '') {
      this.error = 'Fill all data';
      return;
    }

    if (admin !== null) {
      this.uname_id = this.form.value.adminName;
      this.password = this.form.value.pass;

      let obj = this.admins.find(
        (o) => o.name === this.uname_id && o.pass === this.password
      );
      if (obj != undefined) {
        this.router.navigate(['dashbord']);
        localStorage.setItem('token', 'true');
      } else this.error = 'This admin is not found';
    } else {
      const res = await fetch(
        `http://localhost:3000/passwords/${this.uname_id}/${this.password}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => res.json());
      if (res.results.length == 0) this.error = 'This user is not found';
      else {
        this.router.navigate(['/StudentPage'], {
          state: { ssn: this.uname_id },
        });
        localStorage.setItem('token', 'true');
      }
    }
  }

  change() {
    let admin = document.querySelector('input[id="admin"]:checked'); // That returns null if the admin radio button is not selected
    if (admin !== null) this.imgSource = '../../assets/admin.png';
    else this.imgSource = '../../assets/student.png';
  }
}
