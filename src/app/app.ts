import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeById } from "./employee-by-id/employee-by-id";
import { EmployeeList } from "./employee-list/employee-list";

@Component({
  selector: 'app-root',
  
  imports: [EmployeeById, EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'JavaThales';
}
