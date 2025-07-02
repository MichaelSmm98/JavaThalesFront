import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee-service';
import { CommonModule } from '@angular/common';
import { Employee } from '../model/employee.model';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {
  displayedColumns: string[] = ['name', 'salary', 'age', 'image', 'annual'];
  employees: Employee[] = [];
  loading = true;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.employees = data;
        } else {
          this.employees = this.getHardcodedEmployees();
        }

        console.log('Empleados recibidos:', JSON.stringify(this.employees, null, 2));
      },
      error: (err) => {
        console.error('Error fetching employees', err);
        this.employees = this.getHardcodedEmployees();
      },
    });
  }

  getHardcodedEmployees(): Employee[] {
    return [
      {
        id: "1",
        employee_name: "Tiger Nixon",
        employee_salary: 320800,
        employee_age: 61,
        profile_image: "",
        employeeAnnualSalary: 3849600,
      },
      {
        id: "2",
        employee_name: "Garrett Winters",
        employee_salary: 170750,
        employee_age: 63,
        profile_image: "",
        employeeAnnualSalary: 2049000,
      },
      {
        id: "3",
        employee_name: "Ashton Cox",
        employee_salary: 86000,
        employee_age: 66,
        profile_image: "",
        employeeAnnualSalary: 1032000,
      },
      {
        id: "4",
        employee_name: "Cedric Kelly",
        employee_salary: 433060,
        employee_age: 22,
        profile_image: "",
        employeeAnnualSalary: 5196720,
      },
      {
        id: "5",
        employee_name: "Airi Satou",
        employee_salary: 162700,
        employee_age: 33,
        profile_image: "",
        employeeAnnualSalary: 1952400,
      }

    ];
  }
}