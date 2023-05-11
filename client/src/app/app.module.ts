import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pages
import { DashboardComponent } from '@/pages/dashboard/dashboard.component';
import { CoursesComponent } from '@/pages/courses/courses.component';
import { ProfessorsComponent } from '@/pages/professors/professors.component';
import { StudentsComponent } from '@/pages/students/students.component';
import { StudentProfileComponent } from '@/pages/students/student-profile/student-profile.component';

// Components
import {
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
} from '@/components/layout';

import { StatsComponent } from '@/components/sections/dashboard';
import {
  AddCourseDialogComponent,
  AddProfessorDialogComponent,
  AddStudentDialogComponent,
} from '@/components/dialogs';
import {
  AllCoursesTableComponent,
  AllProfessorsTableComponent,
  AllStudentsTableComponent,
} from '@/components/tables';
import { HttpClientModule } from '@angular/common/http';
import { StudentPageComponent } from './student-page/student-page.component';
import { RouterModule, Routes } from '@angular/router';

// Services


const appRoute: Routes = [
  { path: 'StudentPage', component: StudentPageComponent },
];
@NgModule({
  declarations: [
    AppComponent,

    // Pages
    DashboardComponent,
    CoursesComponent,
    ProfessorsComponent,
    StudentsComponent,
    StudentProfileComponent,

    // Components
    LayoutComponent,
    HeaderComponent,
    FooterComponent,

    StatsComponent,

    AddCourseDialogComponent,
    AddProfessorDialogComponent,
    AddStudentDialogComponent,

    AllCoursesTableComponent,
    AllProfessorsTableComponent,
    AllStudentsTableComponent,
    StudentPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
