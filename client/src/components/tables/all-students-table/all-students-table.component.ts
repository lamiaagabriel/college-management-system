import { ApiService } from '@/services/api/api.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor(private api: ApiService, private router: Router) {}
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngOnInit() {
    this.api.get('students').subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }
      
      this.dataSource = new MatTableDataSource<Student[]>(data);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
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
  onShow(ssn: string) {
    this.router.navigate(['/StudentPage'], { state: { ssn: ssn } });
  }
}
interface Student {
  ssn: number;
  name: string;
  email: string;
  phone_number: number;
  academic_year: number;
  date_of_birth: Date;
  gender: 'Male' | 'Female';
  address: string;
  department: string;
  fees: boolean;
  image: string;
}

const ELEMENT_DATA: Student[] = [
  {
    ssn: 1,
    name: 'Hydrogen',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 2,
    name: 'Helium',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 3,
    name: 'Lithium',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 4,
    name: 'Beryllium',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 5,
    name: 'Boron',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 6,
    name: 'Carbon',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 7,
    name: 'Nitrogen',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 8,
    name: 'Oxygen',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 9,
    name: 'Fluorine',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 10,
    name: 'Neon',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 11,
    name: 'Sodium',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 12,
    name: 'Magnesium',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 13,
    name: 'Aluminum',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 14,
    name: 'Silicon',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 15,
    name: 'Phosphorus',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 16,
    name: 'Sulfur',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 17,
    name: 'Chlorine',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 18,
    name: 'Argon',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 19,
    name: 'Potassium',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
  {
    ssn: 20,
    name: 'Calcium',
    email: 'sxas@ss.s',
    phone_number: 104,
    academic_year: 5,
    date_of_birth: new Date(),
    gender: 'Female',
    address: 'Aswan scs',
    department: 'CE',
    fees: true,
    image: 'sxasx',
  },
];
