import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableEmployeesComponent } from './table-employees/table-employees.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableEmployeesComponent,
    AddEmployeComponent,
    EditEmployeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TableEmployeesComponent,
    AddEmployeComponent,
    EditEmployeComponent
  ]
})
export class PagesModule { }
