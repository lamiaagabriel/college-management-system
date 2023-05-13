import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { StudentProfileComponent } from '@/pages/students/student-profile/student-profile.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfessorsComponent } from './professors/professors.component';
import { LoginComponent } from './login/login.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { AuthGuard } from '@/services/shared/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'professors', component: ProfessorsComponent, canActivate: [AuthGuard] },
  { path: 'students', component: StudentsComponent, canActivate: [AuthGuard] },
  { path: 'students/:id', component: StudentProfileComponent, canActivate: [AuthGuard] },
  { path: 'dashbord', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'StudentPage', component: StudentPageComponent, canActivate: [AuthGuard] },
  // Any another path put with it (canActivate: [AuthGuard]) like above
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
