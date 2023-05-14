import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { LucideAngularModule } from 'lucide-angular';
import { icons } from 'lucide-angular';

// Pages
import { DashboardComponent } from '@/pages/dashboard/dashboard.component';
import { CoursesComponent } from '@/pages/courses/courses.component';
import { ProfessorsComponent } from '@/pages/professors/professors.component';
import { StudentsComponent } from '@/pages/students/students.component';
import { StudentProfileComponent } from '@/pages/students/student-profile/student-profile.component';
import { LoginComponent } from '@/pages/login/login.component';
import { StudentPageComponent } from '@/pages/student-page/student-page.component';

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
  EditStudentDialogComponent,
  EditProfessorDialogComponent,
  AddStudentdegreeDialogComponent
} from '@/components/dialogs';
import {
  AllCoursesTableComponent,
  AllProfessorsTableComponent,
  AllStudentsTableComponent,
} from '@/components/tables';
import { HttpClientModule } from '@angular/common/http';

// Services

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    DashboardComponent,
    CoursesComponent,
    ProfessorsComponent,
    StudentsComponent,
    StudentProfileComponent,
    LoginComponent,
    StudentPageComponent,

    // Components
    LayoutComponent,
    HeaderComponent,
    FooterComponent,

    StatsComponent,

    AddCourseDialogComponent,
    AddProfessorDialogComponent,
    AddStudentDialogComponent,
    EditStudentDialogComponent,
    EditProfessorDialogComponent,
    AddStudentdegreeDialogComponent,
    AllCoursesTableComponent,
    AllProfessorsTableComponent,
    AllStudentsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatMenuModule,
    LucideAngularModule.pick(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
