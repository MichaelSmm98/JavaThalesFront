import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeById } from './employee-by-id';
import { Employee } from '../model/employee.model';

@Injectable({
    providedIn: 'root'
})

export class EmployeeByIdService {
    private baseUrl = 'http://localhost:8080/employees/1';

    constructor(private http: HttpClient) { }

    getEmployee(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.baseUrl);
    }

}