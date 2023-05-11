import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import type { Student } from '../../../../../server/types/api';

@Component({
  selector: 'app-all-professors-table',
  templateUrl: './all-professors-table.component.html',
})
export class AllProfessorsTableComponent {
  displayedColumns: string[] = [
    'SSN',
    'Professor',
    'Department',
    'Master',
    'RegistrationDate',
    'Actions',
  ];
  dataSource: any;

  constructor(private api: HttpClient) {}
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngOnInit() {
    this.api.get('http://localhost:3001/professor').subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }

      console.log(data.results);
      this.dataSource = new MatTableDataSource<Student[]>(data.results);
      this.dataSource.paginator = this.paginator;
      console.log(data.results);
    });
  }

  onEdit(ssn: string) {
    console.log('Edit');
    console.log(ssn);
  }

  onDelete(ssn: string) {
    this.api.delete(`http://localhost:3001/professor/${ssn}`).subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }
      location.reload();
    });
  }
}
