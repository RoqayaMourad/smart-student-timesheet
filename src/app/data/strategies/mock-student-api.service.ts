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
        day: 'wednesday',
        startTime: '00:15',
        endTime: '02:00'
      },
      {
        subject: 'Physics',
        day: 'wednesday',
        startTime: '08:45',
        endTime: '10:30'
      }
    ],
    found: true
  });
}

}
