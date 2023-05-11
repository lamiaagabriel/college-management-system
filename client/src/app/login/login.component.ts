import { Component, OnInit,NgModule, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router : Router){}
  ngOnInit(): void {
  }

  datalabel:string = "Username";
  logintype:string = "";
  password:string = "";
  uname_id: string = "";
  admins = [
    {name: "Marwa", password: "512001"},
    {name: "Admin", password: "Admin"},
  ]

  @ViewChild('myForm') form: any = NgForm;

  async onSubmit(){
      if(this.datalabel == "Username")
        {this.logintype = "Admin";}
      else  
        {this.logintype = "user";}

      this.uname_id = this.form.value.username;
      this.password = this.form.value.pass;
      
    let obj = this.admins.find(o => o.name === this.uname_id && o.password === this.password);
    if (obj != null)
    {
      this.router.navigate(['']);
      console.log("success");
    }
  }  
}
