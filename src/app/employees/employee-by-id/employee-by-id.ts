import { Component, OnInit } from '@angular/core';
import { EmployeeByIdService } from './employee-by-id-service';
import { CommonModule } from '@angular/common';
import { Employee } from '../model/employee.model';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-employee-by-id',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule],
  templateUrl: './employee-by-id.html',
  styleUrl: './employee-by-id.css'
})
export class EmployeeById implements OnInit {

  employee!: Employee;

  constructor(private empl: EmployeeByIdService) { }

  ngOnInit(): void {
    this.empl.getEmployee().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.employee = data[0];
          console.log('consola');

        } else {

          this.employee = {
            id: '1',
            employee_name: "Tiger Nixon Test",
            employee_salary: 320800,
            employee_age: 61,
            profile_image: "",
            employeeAnnualSalary: 3849600
          };
          console.log(this.employee + 'esto');
        }

        console.log('employee', JSON.stringify(this.employee, null, 2));
      },
      error: (err) => {
        console.error('Error ', err);
        this.employee = {
          id: '1',
          employee_name: "Tiger Nixon Test",
          employee_salary: 320800,
          employee_age: 61,
          profile_image: "",
          employeeAnnualSalary: 3849600

        };

      }
    });
  }
}
