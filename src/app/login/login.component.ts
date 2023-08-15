import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { HttpClient } from '@angular/common/http';


export interface applicants {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  department?: string;
  resume?: File | undefined;
 

 }


 
export class allapplicants  {constructor(
 public id: number,
 public firstname: string,
 public lastname: string,
 public email: string,
 public department: string,
 public resume: File | undefined
 
 
) {}
}

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  applicants: applicants = {      };
  allapplicants: allapplicants[] = [];

  errormessage?: any;
 
  invalidform = false;
  


  constructor (private router: Router, private ServiceService: ServiceService, private http: HttpClient) { }
 
 

  upload(file: File) {const formData = new FormData();
    formData.append('file', file);
    return this.http.post('assets/Resume', formData); }

 Submit() {
 if (this.applicants.resume) {
      this.upload(this.applicants.resume).subscribe(
        response => {
          console.log('File uploaded successfully:', response);
        },
        error => {
          console.error('Error uploading file:', error);
        }
      );
    }

  }

  

  /*

     console.log(this.applicants.firstname); 
  console.log(this.applicants.lastname); 
  console.log(this.applicants.department); 
  console.log(this.applicants.resume); 
  console.log(this.applicants.email); 

  
  */
  
  
  ngOnInit(): void {console.log("BD")}

  }

  
 