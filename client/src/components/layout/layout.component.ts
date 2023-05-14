import { Component } from '@angular/core';

@Component({
  selector: 'Layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}

export const navLinks: { to: string; title: string; icon: string }[] = [
  { to: '/dashbord', title: 'Home', icon: 'layout-dashboard' },
  { to: '/students', title: 'Students', icon: 'users-2' },
  { to: '/professors', title: 'Professors', icon: 'verified' },
  { to: '/courses', title: 'Courses', icon: 'album' },
];
