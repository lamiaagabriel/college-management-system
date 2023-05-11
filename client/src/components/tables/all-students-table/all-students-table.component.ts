import { ApiService } from '@/services/api/api.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {Student} from '@/server/types/api'
import { MatTableDataSource } from '@angular/material/table';
import { EditStudentDialogComponent } from '@/components/dialogs/edit-student-dialog/edit-student-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-students-table',
  templateUrl: './all-students-table.component.html',
})
export class AllStudentsTableComponent {
  displayedColumns: string[] = [
    'ssn',
    'student',
    'department',
    'fees',
    'created_at',
    'actions',
  ];
  dataSource: any;

  constructor(private api: ApiService,public dialog: MatDialog, private router: Router) {}
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngOnInit() {
    this.api.get('students').subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }
      this.dataSource = new MatTableDataSource<Student[]>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  onEdit(ssn: string) {
    // Set input fields
    this.api.get(`students/${ssn}`).subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }
    // console.log(data[0]); // Object
     
       this.dialog.open(EditStudentDialogComponent,{
        data:{
          ssn:ssn,
          fullname:data[0].name,
          email:data[0].email,
          phonenumber:data[0].phone_number,
          academicyear:data[0].academic_year,
          dateofbirth:data[0].date_of_birth,
          gender:data[0].gender,
          address:data[0].address,
          department:data[0].department,
          fees:data[0].fees,
          photourl:data[0].image,
          password:data[0].password
        }
       });
      
    });
  
  }

  onDelete(ssn: string) {
    this.api.delete('students',ssn).subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }
    });
    location.reload();
  }
  onShow(ssn: any){
    this.router.navigate(['/StudentPage'], { state: { ssn: ssn } });
  }
}
