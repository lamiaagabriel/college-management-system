import { ApiService } from '@/services/api/api.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {Professor} from '@/server/types/api'
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditProfessorDialogComponent } from '@/components/dialogs';

@Component({
  selector: 'app-all-professors-table',
  templateUrl: './all-professors-table.component.html',
})
export class AllProfessorsTableComponent {
  displayedColumns: string[] = [
    'ssn',
    'professor',
    'department',
    'master',
    'created_at',
    'actions',
  ];
  dataSource: any;

  constructor(private api: ApiService,public dialog: MatDialog, private router: Router) {}
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngOnInit() {
    this.api.get('professors').subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }
      this.dataSource = new MatTableDataSource<Professor[]>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  onEdit(ssn: string) {
   // Set input fields
   this.api.get(`professors/${ssn}`).subscribe((data: any) => {
    if (data.errors) {
      console.log('Error');
      return;
    }
  //console.log(data); // Object
   
     this.dialog.open(EditProfessorDialogComponent,{
      data:{
        ssn:ssn,
        fullname:data.name,
        email:data.email,
        phonenumber:data.phone_number,   
        dateofbirth:data.date_of_birth,
        gender:data.gender,
        address:data.address,
        department:data.department,
        photourl:data.image,
        university: data.university,
        phd: data.phd,
        master:data.master 
      }
     });
   
  });
  }

  onDelete(ssn: string) {
    this.api.delete('professors',ssn).subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }
    });
  }
}

