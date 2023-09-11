import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { LoginComponent,allapplicants } from '../login/login.component';

 

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
    private serviceService: ServiceService
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


*/ 


 

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
