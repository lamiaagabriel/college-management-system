import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css'],
})
export class StudentPageComponent implements OnInit {
  students: any = [];
  ssn: any;
  // When page reload
  state: any;
  constructor(private router: Router) {
    // Get the ssn from all-students-table components
    this.state = this.router.getCurrentNavigation()?.extras.state;
  }

  async ngOnInit() {
    this.ssn = this.state.ssn;
    // Fetch student info
    const res = await fetch(`http://localhost:3000/studentData/${this.ssn}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
    
    this.students = res;
    if (this.students[0] != undefined) {
      this.studentInfo.image = `https://res.cloudinary.com/dnbruhgqr/image/upload/v1683030639/PersonalPhotos/${this.students[0]['image']}`;
      this.studentInfo.name = this.students[0]['name'];
      this.studentInfo.ID = this.students[0]['ssn'];
      this.studentInfo.address = this.students[0]['address'];
      this.studentInfo.academicYear = String(this.students[0]['academic_year']);
      this.studentInfo.email = this.students[0]['email'];
      this.studentInfo.gender = this.students[0]['gender'];
      this.studentInfo.DOB = String(this.students[0]['date_of_birth'])?.slice(
        0,
        10
      );
      this.studentInfo.specialist = this.students[0]['department'];
      this.studentInfo.fees =
        this.students[0]['fees'] == '0' ? 'false' : 'true';
    }
    this.selected = this.studentInfo.academicYear;
    // Fetch stuent courses
    this.getCourses('1');
  }

  // function for getting student courses passing the semester as parameter
  async getCourses(Semester: any) {
    const res = await fetch(
      `http://localhost:3000/studentCourses/${this.selected}/${Semester}/${this.ssn}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => res.json());

    if (Semester === '1') {
      firstTerm = res.results;
      for (let i = 0; i < firstTerm.length; i++)
        firstTerm[i].grade = this.calGrade(+firstTerm[i].Percentage);
      this.dataSource = new MatTableDataSource<PeriodicElement>(firstTerm);
    } else {
      secondTerm = res.results;
      for (let i = 0; i < secondTerm.length; i++)
        secondTerm[i].grade = this.calGrade(+secondTerm[i].Percentage);
      this.dataSource = new MatTableDataSource<PeriodicElement>(secondTerm);
    }
  }

  // function for calculating the grade
  calGrade(grade: any) {
    if (grade >= 85) return 'Excellent';
    else if (grade >= 75) return 'Very Good';
    else if (grade >= 65) return 'Good';
    else if (grade >= 50) return 'Passing';
    else if (grade >= 35) return 'Poor';
    else return 'Very Poor';
  }
  // Function happen when change the academic year
  selectYear() {
    if (this.toggleChecked[1] == '') this.getCourses('1');
    if (this.toggleChecked[0] == '') this.getCourses('2');
  }

  displayedColumns: string[] = [
    'subjectName',
    'subjectID',
    'grade',
    'Percentage',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(firstTerm);
  hide: boolean = false;
  toggleChecked: any = ['mat-button-toggle-checked', ''];
  studentInfo = {
    image: '',
    name: '',
    ID: '',
    address: '',
    academicYear: '',
    email: '',
    gender: '',
    DOB: '',
    specialist: '',
    fees: '',
  };
  selected = this.studentInfo.academicYear;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  changeCheck1() {
    if (this.toggleChecked[0] === '') this.toggleChecked.reverse();
    this.getCourses('1');
  }
  changeCheck2() {
    if (this.toggleChecked[1] === '') this.toggleChecked.reverse();
    this.getCourses('2');
  }
}

export interface PeriodicElement {
  subjectID: string;
  subjectName: string;
  grade: string;
  Percentage: string;
}
let firstTerm: PeriodicElement[] = [];
let secondTerm: PeriodicElement[] = [];
