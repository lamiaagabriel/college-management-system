import { Component } from '@angular/core';
import { ApiService } from '@/services/api/api.service';

@Component({
  selector: 'Stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent {
 StudentsNumber:number = 0;
 ProfessorsNumber:number = 0;
 CoursesNumber:number = 0;

 constructor(private api: ApiService) {}
 ngOnInit() {
  this.api.get('dashbord').subscribe((data: any) => {
    if (data.errors) {
      console.log('Error');
      return;
    }
    console.log(data.results[0]);
    this.StudentsNumber = data.results[0].studentsnum;
    this.ProfessorsNumber = data.results[0].professorsnum;
    this.CoursesNumber = data.results[0].coursesnum;
  });
}
}
