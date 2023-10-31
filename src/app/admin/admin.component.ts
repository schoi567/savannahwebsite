import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { LoginComponent,allapplicants } from '../login/login.component';
import { saveAs } from 'file-saver';
 
import { retry, catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpStatusCode } from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { AdminloginComponent, admin, alladmin } from '../adminlogin/adminlogin.component';
 

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit  {
  allapplicants: allapplicants[] = [];
 
  constructor(
    private router: Router,
    private serviceService: ServiceService, 
    private http: HttpClient
  ) {}
    getResumeUrl(resume: string | undefined): string {
      // Assuming that 'resume' is a URL or a path to the file
      return resume || ''; // Return an empty string if resume is undefined
  }

  getResumeFileName(resume: string | undefined): string {
      // Assuming that 'resume' contains the filename
      const segments = (resume || '').split('/');
      return segments.length > 0 ? segments[segments.length - 1] : 'resume.pdf';
  }
 
  deletebyid(id: number) {
    console.log(id); 
    this.serviceService.deleteApplicantById(id).subscribe(
      () => {
          console.log('Deleted successfully');
          // Maybe refresh your data or navigate to another route
          window.location.reload();
      },
      error => {
          console.error('Error occurred:', error);
      }
  );
  }


  /*
 
  downloadResume(resumeUrl: string | File | undefined) {
    if (typeof resumeUrl === 'string') {
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.target = '_blank';
        link.download = this.getResumeFileName(resumeUrl);
        link.click();
    } else if (resumeUrl instanceof File) {
        const url = URL.createObjectURL(resumeUrl);
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.download = resumeUrl.name;
        link.click();
        URL.revokeObjectURL(url);
    }
}

downloadResume(id: number) {
  return this.http.get(`http://192.168.10.107:8080/downloadResume/${id}`, { responseType: 'blob', observe: 'response' })
  .subscribe(response => {
      // Get the content-disposition header to extract filename
      const contentDisposition = response.headers.get('content-disposition') || '';
      const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
      const filename = (matches && matches[1]) ? matches[1] : 'resume.pdf';
      
      // Use the saveAs function from file-saver package to save the file
      saveAs(response.body as Blob, filename);


  });



  this.serviceService.downloadResume(id).subscribe(response => {
    // Get the content-disposition header to extract filename
    const contentDisposition = response.headers.get('content-disposition') || '';
    const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
    const filename = (matches && matches[1]) ? matches[1] : 'resume.pdf';
  
    // Use the saveAs function from file-saver package to save the file
    saveAs(response.body as Blob, filename);
});


  this.serviceService.downloadResume(id).subscribe(response => {
        // Get the content-disposition header to extract filename
        const contentDisposition = response.headers.get('content-disposition') || '';
        const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
        const filename = (matches && matches[1]) ? matches[1] : 'resume.pdf';
      
        // Use the saveAs function from file-saver package to save the file
        saveAs(response.body as Blob, filename);

  });
}




*/ 
downloadFile(id: number, filename: string): void {
  this.serviceService.downloadResume(id).subscribe(data => {
      const blob = new Blob([data], { type: 'application/pdf' });  // assuming it's a PDF
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      const applicant = this.allapplicants.find(app => app.id === id);
      if (applicant) {
          filename = `${applicant.firstname}_${applicant.lastname}`;
          console.log(filename);
      } else {
        alert("The applicant does not exist");
      }
      
      link.download = filename;
      link.click();   
    
    
    });}


    

 

    ngOnInit(): void {


      const gothrough = localStorage.getItem('gothrough');
      const gothrough1 = sessionStorage.getItem('gothrough');
  
      console.log(gothrough);

      console.log(gothrough1);

      this.serviceService.retrieveapplicantsinfo().subscribe(
        (admin) => (this.allapplicants = admin)
      );
      console.log(this.allapplicants)
     
    if(gothrough1===null  ) {
      this.router.navigate(["adminlogin"]);

    }
     
    }


  turnin(){console.log("BD")}

  Logout() {
    sessionStorage.clear();
    localStorage.clear();
  
      this.router.navigate(["adminlogin"]);
    }


    /*
          localStorage.setItem('password', 'admin');
          localStorage.setItem('username', 'admin');
          this.sessionrememberme = 'gothrough';
          sessionStorage.setItem('gothrough', this.sessionrememberme);
    
    */

}
