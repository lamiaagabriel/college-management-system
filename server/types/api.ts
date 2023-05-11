export { ApiResponse };

declare global {
  interface ApiResponse<T> {
    results: T | null;
    errors: string | null;
  }
}

export interface Student {
  SSN: string;
  Name: string;
  Email: string;
  PhoneNumber: number;
  AcademicYear: number;
  DateOfBirth: string; // Date
  Gender: 'Male' | 'Female';
  Address: string;
  Department: string;
  FEES: boolean;
  PersonalPhotoURL: string;
}

export interface Course {
  ID: string;
  Name: string;
  Year: number;
  Semester: number;
}

export interface Professor {
  SSN: string;
  Name: string;
  Email: string;
  PhoneNumber: string;
  DateOfBirth: Date;
  Gender: string;
  Address: string;
  Department: string;
  PersonalPhotoURL: string;
  University: string;
  Master: string;
  Phd: string;
}
