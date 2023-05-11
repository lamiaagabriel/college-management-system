import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProfessorDialogComponent } from '../../components/dialogs/add-professor-dialog/add-professor-dialog.component';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent {
  constructor(public dialog: MatDialog) {}
  openForm() {
    this.dialog.open(AddProfessorDialogComponent);
  }
}
