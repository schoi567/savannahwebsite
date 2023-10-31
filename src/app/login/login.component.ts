import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { HttpClient } from '@angular/common/http';

export interface applicants {
  id?: number;
  firstname?: string;
  lastname?: string;
  route?: string,
  email?: string;
  departments?: string;
  resume?: Blob;
}

export class allapplicants {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public email: string,
    public route: string,
    public departments: string,
    public resume: Blob
  ) { }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  invalidLogin = false;
  errorMessage = '';
  applicants: applicants = {};
  allapplicants: allapplicants[] = [];

  errormessage?: any;
  uploadMessage?: string;

  invalidform = false;

  selectedFile: File | null = null;

  constructor(private router: Router, private ServiceService: ServiceService, private http: HttpClient) { }

  ngOnInit(): void {
 
this.ServiceService.retrieveapplicantsinfo().subscribe(
  (Allapplicants) =>  this.allapplicants= Allapplicants);

  console.log(this.allapplicants); 

 

 
  }

  Submit1() {
     for(let i = 0; i < this.allapplicants.length; i++) {
        if (this.applicants.email  == this.allapplicants[i].email) {
          this.errorMessage = 
          "Your application has already been submitted.  If this is an error please contact HR";
          this.invalidform = true;
          return; 
        }
        
        

     }


    this.invalidform = false; // Reset the flag before checking fields

    if (!this.applicants.firstname) {
      this.errorMessage = "Please fill out your first name";
      this.invalidform = true;
    }

    if (!this.applicants.lastname) {
      this.errorMessage = "Please fill out your last name";
      this.invalidform = true;
    }

    if (!this.applicants.route) {
      this.errorMessage = "Would you tell us how you heard about us?";
      this.invalidform = true;
    }

    if (!this.applicants.email) {
      this.errorMessage = "Please fill out your email";
      this.invalidform = true;
    }

   
    if (!this.invalidform) {
      // Incorporating the provided logic
      this.ServiceService.applicants(this.applicants, this.selectedFile).subscribe(
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

    this.ServiceService.retrieveapplicantsinfo().subscribe(
      (Allapplicants) =>  this.allapplicants= Allapplicants);
   
 //  for (  this.allapplicants.length)   


  }

 
bd() {

  console.log(this.allapplicants); 
} 



  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && file.name.endsWith('.pdf')) {
        this.selectedFile = file;
    } else {
        alert('Only PDF files are allowed.');
    }
}
}
