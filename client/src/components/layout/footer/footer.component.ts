import { Component } from '@angular/core';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  navLinks: { to: string; title: string }[] = [
    { to: '/dashbord', title: 'Home' },
    { to: '/courses', title: 'Courses' },
    { to: '/students', title: 'Students' },
    { to: '/professors', title: 'Professors' },
  ];
  current_year: number = new Date().getFullYear();
}
