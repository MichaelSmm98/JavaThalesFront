import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeByIdService {
    private baseUrl = 'http://localhost:8080/employees/1';

    constructor(private http: HttpClient) { }

    getEmployee(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl);
    }

}