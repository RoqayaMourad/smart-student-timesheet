import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentResponse } from '../models/student-response.model';
import { StudentRequest } from '../models/student-request.model';
import { StudentDataStrategy } from '../../data/strategies/student-data.strategy';
import { MockStudentApiService } from '../../data/strategies/mock-student-api.service';

@Injectable({
  providedIn: 'root'
})
export class StudentFacade {

  constructor(
    private studentStrategy: MockStudentApiService
  ) {}

 loadStudentTimesheet(
  studentId: string,
  studentName: string
) {
  const request = { studentId, studentName };
  return this.studentStrategy.getStudentTimesheet(request);
}
}
