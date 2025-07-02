import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeById } from './employees/employee-by-id/employee-by-id';
import { EmployeeList } from './employees/employee-list/employee-list';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: EmployeeList },
  { path: 'employee/:id', component: EmployeeById }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
