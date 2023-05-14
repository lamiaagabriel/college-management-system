import { Component } from '@angular/core';
import { navLinks } from '../layout.component';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  navLinks = navLinks;
  current_year: number = new Date().getFullYear();
}
