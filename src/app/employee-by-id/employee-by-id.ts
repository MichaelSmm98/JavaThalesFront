import { Component, OnInit } from '@angular/core';
import { EmployeeByIdService } from './employee-by-id-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employee-by-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-by-id.html',
  styleUrl: './employee-by-id.css'
})
export class EmployeeById implements OnInit {

  employee: any;

  constructor(private empl: EmployeeByIdService) { }

  ngOnInit() {
    this.empl.getEmployee().subscribe({
      next: (data) => {
        this.employee = {
          ...data

        };
        console.log('employee', JSON.stringify(data, null, 2));
      }


    })
  }

}
