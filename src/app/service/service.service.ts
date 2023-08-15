import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpStatusCode } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

/*
  makecheckrequest(username: any, singlecheckbookreq: singlecheckbookreq): Observable<singlecheckbookreq> {
    return this.http.post<singlecheckbookreq>(`http://10.1.10.197:8080/checkrequests/${username}`,singlecheckbookreq)
  }
*/ 




  
}
