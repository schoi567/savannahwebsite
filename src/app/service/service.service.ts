import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { applicants, allapplicants } from 'src/app/login/login.component';
import {  Observable, throwError } from 'rxjs';
import { AdminloginComponent, admin, alladmin } from '../adminlogin/adminlogin.component';

const httpOptions = {
  headers: new HttpHeaders({
    // Do not explicitly set 'Content-Type' header for FormData
  }),
};

 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


 
  
 
  applicants(applicants: applicants): Observable<any> {
    const formData = new FormData();

    if (applicants.resume) {
      formData.append('resume', applicants.resume);
    }

    if (applicants.firstname) {
      formData.append('firstname', applicants.firstname);
    }

    if (applicants.lastname) {
      formData.append('lastname', applicants.lastname);
    }

    if (applicants.email) {
      formData.append('email', applicants.email);
    }

    if (applicants.departments) {
      formData.append('department', applicants.departments);
    }

    return this.http.post(`http://192.168.10.102:8080/applicants`, formData);
  }
 

  retrieveadmininfo(): Observable<alladmin[]> {
    return this.http.get<alladmin[]>(`http://192.168.10.102:8080/admin`)
  }
 

  retrieveapplicantsinfo(): Observable<allapplicants[]> {
    return this.http.get<allapplicants[]>(`http://192.168.10.102:8080/allapplicants`)
  }

 
}
