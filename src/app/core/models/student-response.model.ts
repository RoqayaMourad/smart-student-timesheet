import { StudentClass } from './student-class.model';

export interface StudentResponse {
  studentId: string;
  studentName: string;
  classes: StudentClass[];
  found: boolean;
}
