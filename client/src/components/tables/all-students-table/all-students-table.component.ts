import { ApiService } from '@/services/api/api.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {Student} from '@/server/types/api'
import { MatTableDataSource } from '@angular/material/table';

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

  constructor(private api: ApiService) {}
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
    console.log('Edit');
    console.log(ssn);
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
}
