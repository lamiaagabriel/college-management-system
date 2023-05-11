import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const materials = [
  MatPaginatorModule,
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  FormsModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatDialogModule,
  MatTableModule,
  MatCheckboxModule,
  MatSelectModule,
  MatButtonToggleModule,
];

@NgModule({
  imports: [materials],
  exports: [materials],
})
export class MaterialModule {}
