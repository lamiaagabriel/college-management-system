import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navLinks: { to: string; title: string }[] = [
    { to: '/dashbord', title: 'Home' },
    { to: '/courses', title: 'Courses' },
    { to: '/students', title: 'Students' },
    { to: '/professors', title: 'Professors' },
  ];

  username = 'Marwa';
  id = '12345';
  avatar: String =
    'https://res.cloudinary.com/dnbruhgqr/image/upload/v1683030639/PersonalPhotos/wukylecey7nxvowjn96d.jpg';

  gohome() {
    this.router.navigate(['/login']);
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
