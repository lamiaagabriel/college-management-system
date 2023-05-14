import { ApiService } from '@/services/api/api.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {Course} from '@/server/types/api'
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditCourseDialogComponent } from '@/components/dialogs';


@Component({
  selector: 'app-all-courses-table',
  templateUrl: './all-courses-table.component.html',
})
export class AllCoursesTableComponent {
  displayedColumns: string[] = ['course', 'year', 'semester', 'actions'];
  dataSource: any;

  constructor(private api: ApiService,public dialog: MatDialog, private router: Router) {}
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngOnInit() {
    this.api.get('courses').subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }

      console.log(data);
      this.dataSource = new MatTableDataSource<Course[]>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  onEdit(ID: string) {
    this.api.get(`courses/${ID}`).subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }
      this.dialog.open(EditCourseDialogComponent,{
        data:{
          id:data.id,
          coursename:data.name,
          AcademicYear: data.year,
          Semester : data.semester,
          Department : data.department,
        }
       });
    });
  }

  onDelete(ssn: string) {
    this.api.delete('courses',ssn).subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }
    });
    location.reload();
  }
}
