import { ApiService } from '@/services/api/api.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {Professor} from '@/server/types/api'


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

  constructor(private api: ApiService) {}
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngOnInit() {
    this.api.get('professors').subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }

      console.log(data);
      this.dataSource = new MatTableDataSource<Professor[]>(data);
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

