import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '@/pages/dashboard/dashboard.component';
import { StudentsComponent } from '@/pages/students/students.component';
import { StudentProfileComponent } from '@/pages/students/student-profile/student-profile.component';
import { CoursesComponent } from '@/pages/courses/courses.component';
import { ProfessorsComponent } from '@/pages/professors/professors.component';
import { LoginComponent } from '@/pages/login/login.component';
import { StudentPageComponent } from '@/pages/student-page/student-page.component';
import { AuthGuard } from '@/services/shared/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  {
    path: 'professors',
    component: ProfessorsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'students', component: StudentsComponent, canActivate: [AuthGuard] },
  {
    path: 'students/:id',
    component: StudentProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'dashbord', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'StudentPage',
    component: StudentPageComponent,
    canActivate: [AuthGuard],
  },

  // Any another path put with it (canActivate: [AuthGuard]) like above
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
