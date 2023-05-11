import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
})
export class StudentProfileComponent implements OnInit {
  constructor(private routes: ActivatedRoute) {}
  ngOnInit() {
    console.log(this.routes.snapshot.paramMap.get('id'));
  }
}
