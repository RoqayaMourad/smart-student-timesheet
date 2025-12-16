import { Component } from '@angular/core';
import { StudentFacade } from '../../core/facades/student.facade';
import { StudentResponse } from '../../core/models/student-response.model';
import { StudentClass } from '../../core/models/student-class.model';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent {

  studentId = '';
  studentName = '';
  studentData!: StudentResponse;

  currentClass: StudentClass | null = null;
  nextClass: StudentClass | null = null;

  constructor(private studentFacade: StudentFacade) {}

loadTimesheet(): void {
  this.studentFacade
    .loadStudentTimesheet(this.studentId, this.studentName)
    .subscribe(response => {
      if (!response) {
        this.studentData = undefined as any;
        this.currentClass = null;
        this.nextClass = null;
        alert('Student not found');
        return;
      }

      this.studentData = response;
      this.detectCurrentAndNextClass();
    });
}

private detectCurrentAndNextClass(): void {
    const now = new Date();
    const currentDay = now.toLocaleString('en-US', { weekday: 'long' });
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const todayClasses = this.studentData.classes
      .filter(c => c.day === currentDay)
      .map(c => ({
        ...c,
        start: this.toMinutes(c.startTime),
        end: this.toMinutes(c.endTime)
      }))
      .sort((a, b) => a.start - b.start);

    this.currentClass = null;
    this.nextClass = null;

    for (const c of todayClasses) {
      if (currentMinutes >= c.start && currentMinutes <= c.end) {
        this.currentClass = c;
        return;
      }

      if (currentMinutes < c.start) {
        this.nextClass = c;
        return;
      }
    }
  }



  private toMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
}
