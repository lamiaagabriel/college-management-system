import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '@/components/dialogs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  constructor(public dialog: MatDialog) {}
  openForm() {
    this.dialog.open(AddStudentDialogComponent);
  }
}
