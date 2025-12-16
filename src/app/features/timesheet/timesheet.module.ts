import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetComponent } from './timesheet.component';


@NgModule({
  declarations: [
    TimesheetComponent
  ],
  imports: [
    CommonModule,
    TimesheetRoutingModule,
    FormsModule
  ]
})
export class TimesheetModule { }
