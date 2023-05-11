import { Component } from '@angular/core';

@Component({
  selector: 'Stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent {
  stats: { to: string; title: string }[] = [
    { to: '/students', title: 'Manage Students' },
    { to: '/courses', title: 'Manage Courses' },
    { to: '/professors', title: 'Manage Professors' },
  ];
}
