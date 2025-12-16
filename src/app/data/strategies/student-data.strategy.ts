import { Observable } from 'rxjs';
import { StudentRequest } from '../../core/models/student-request.model';
import { StudentResponse } from '../../core/models/student-response.model';

export interface StudentDataStrategy {
  getStudentTimesheet(
    request: StudentRequest
  ): Observable<StudentResponse>;
}
