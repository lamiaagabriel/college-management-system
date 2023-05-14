export { ApiResponse }

declare global {
  interface ApiResponse<T> {
    results: T | null
    errors: string | null
  }
}

export interface Student {
  id: string
  ssn: number
  name: string
  email: string
  phone_number: number
  academic_year: number
  date_of_birth: Date
  gender: "Male" | "Female"
  address: string
  department: string
  fees: boolean
  image: string
  created_at: Date
  updated_at: Date
}

export interface Course {
  id: string
  name: string
  department: string
  year: string
  semester: string
}

export interface Professor {
  address: string
  created_at: Date
  department: string
  email: string
  gender: string
  id: string
  image: string
  master: string
  name: string
  phd: string
  phone_number: string
  ssn: string
  university: string
  updated_at: Date
}
