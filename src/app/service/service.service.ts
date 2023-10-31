import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { applicants, allapplicants } from 'src/app/login/login.component';
import { Observable, throwError } from 'rxjs';
import { AdminloginComponent, admin, alladmin } from '../adminlogin/adminlogin.component';
import { saveAs } from 'file-saver';

const httpOptions = {
  headers: new HttpHeaders({
    // Do not explicitly set 'Content-Type' header for FormData
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  downloadResume(id: number): Observable<Blob> {
   return this.http.get<Blob>(`http://sesweb3.eba-zahnmttg.us-east-1.elasticbeanstalk.com/downloadResume/${id}`, { responseType: 'blob' as 'json' });
    // return this.http.get<Blob>(`http://localhost:8080/downloadResume/${id}`, { responseType: 'blob' as 'json' });
  }
 
 


  applicants(applicantData: applicants, file: File | null): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('firstname', applicantData.firstname!);
    formData.append('lastname', applicantData.lastname!);
    formData.append('email', applicantData.email!);
    formData.append('route', applicantData.route!);
    formData.append('department', applicantData.departments!);
    if (file) {
      formData.append('resume', file, file.name);
    }

   return this.http.post(`http://sesweb3.eba-zahnmttg.us-east-1.elasticbeanstalk.com/applicants`, formData);
     //  return this.http.post(`http://localhost:8080/applicants`, formData);
  
  
  }

 

  retrieveadmininfo(): Observable<alladmin[]> {
   return this.http.get<alladmin[]>(`http://sesweb3.eba-zahnmttg.us-east-1.elasticbeanstalk.com/admin`)

   //    return this.http.get<alladmin[]>(`http://localhost:8080/admin`)

  }

  retrieveapplicantsinfo(): Observable<allapplicants[]> {
  return this.http.get<allapplicants[]>(`http://sesweb3.eba-zahnmttg.us-east-1.elasticbeanstalk.com/allapplicants`)

  //return this.http.get<allapplicants[]>(`http://localhost:8080/allapplicants`)
  }
 
  deleteApplicantById(id: number): Observable<void> {
    //  return this.http.get<void>(`http://localhost:8080/app/${id}`);
    return this.http.get<void>(`http://sesweb3.eba-zahnmttg.us-east-1.elasticbeanstalk.com/app/${id}`);
}
}
