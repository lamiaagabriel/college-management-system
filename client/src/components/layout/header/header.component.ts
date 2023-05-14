import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navLinks } from '../layout.component';
@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  navLinks: typeof navLinks = navLinks;
  isActive: string = navLinks[0].to;

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
