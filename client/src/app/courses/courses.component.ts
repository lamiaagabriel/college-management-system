import { AddCourseDialogComponent } from '@/components/dialogs';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  constructor(public dialog: MatDialog) {}
  openForm() {
    this.dialog.open(AddCourseDialogComponent);
}}
