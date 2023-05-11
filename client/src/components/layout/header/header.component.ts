import { Component } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navLinks: { to: string; title: string }[] = [
    { to: '/', title: 'Home' },
    { to: '/courses', title: 'Courses' },
    { to: '/students', title: 'Students' },
    { to: '/professors', title: 'Professors' },
  ];

  username = 'Marwa';
  id = '12345';
}
