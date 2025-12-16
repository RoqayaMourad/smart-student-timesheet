import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudentDataStrategy } from './student-data.strategy';
import { StudentResponse } from '../../core/models/student-response.model';
import { StudentRequest } from '../../core/models/student-request.model';

@Injectable({
  providedIn: 'root'
})
export class MockStudentApiService implements StudentDataStrategy {

 getStudentTimesheet(request: StudentRequest): Observable<StudentResponse> {

  if (request.studentId !== '123' || request.studentName.toLowerCase() !== 'ahmed') {
    return of({
      studentId: request.studentId,
      studentName: request.studentName,
      classes: [],
      found: false
    });
  }

  return of({
    studentId: request.studentId,
    studentName: request.studentName,
    classes: [
      {
        subject: 'Mathematics',
        day: 'Tuesday',
        startTime: '22:00',
        endTime: '23:30'
      },
      {
        subject: 'Physics',
        day: 'Tuesday',
        startTime: '23:45',
        endTime: '00:30'
      }
    ],
    found: true
  });
}

}
