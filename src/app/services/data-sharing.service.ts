import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDeatails } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor(private http: HttpClient) {}

  getEmployeeDetails = (): Observable<EmployeeDeatails[]> => this.http.get<EmployeeDeatails[]>('./../../assets/data.json');
  
}
