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
  departments?: string;
  resume?: string;
 

 }


 
export class allapplicants  {constructor(
 public id: number,
 public firstname: string,
 public lastname: string,
 public email: string,
 public departments: string,
 public resume: string
 
 
) {}
}

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  errorMessage = '';
  applicants: applicants = {      };
  allapplicants: allapplicants[] = [];

  errormessage?: any;
  uploadMessage?: string;

  invalidform = false;
  
  selectedFile: File | null = null;

  constructor (private router: Router, private ServiceService: ServiceService, private http: HttpClient) { }
 
  ngOnInit(): void {console.log("BD")}
 
Submit1() {
  this.invalidform = false; // Reset the flag before checking fields

  if (!this.applicants.firstname) {
    this.errorMessage = "Please fill out your first name";
    this.invalidform = true;
  }

  if (!this.applicants.lastname) {
    this.errorMessage = "Please fill out your last name";
    this.invalidform = true;
  }

  if (!this.applicants.email) {
    this.errorMessage = "Please fill out your email";
    this.invalidform = true;
  }

  if (!this.applicants.resume) {
    this.errorMessage = "Please attach your resume";
    this.invalidform = true;
  }

  if (!this.invalidform) {
    this.ServiceService.applicants(this.applicants).subscribe(
      response => {
        console.log('Thank you for your interest', response);
        alert('Thank you for your interest');
        this.router.navigate(["thankyou"]);
        console.log(this.applicants);
      },
      error => {
        console.error('not uploaded', error);
      }
    );
  }
}






 
 

}





 
 