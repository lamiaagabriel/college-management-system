import { ApiService } from '@/services/api/api.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-all-courses-table',
  templateUrl: './all-courses-table.component.html',
})
export class AllCoursesTableComponent {
  displayedColumns: string[] = ['course', 'year', 'semester', 'actions'];
  dataSource: any;

  constructor(private api: ApiService) {}
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

  onEdit(ssn: string) {
    console.log('Edit');
    console.log(ssn);
  }

  onDelete(ssn: string) {
    console.log('Delete');
    console.log(ssn);
  }
}

interface Course {
  id: string;
  name: string;
  year: string;
  semester: string;
}
