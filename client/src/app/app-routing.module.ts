import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { StudentProfileComponent } from '@/pages/students/student-profile/student-profile.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfessorsComponent } from './professors/professors.component';
import { LoginComponent } from './login/login.component';
import { StudentPageComponent } from './student-page/student-page.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'professors', component: ProfessorsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'StudentPage', component: StudentPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
