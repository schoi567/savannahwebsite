import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service/service.service';

export interface admin {
  id?: number;
  adminid?: string;
  password?: any;
  
 }

export class alladmin  {constructor(
 public id: number,
 public adminid: string,
 public password: string,
 
) {}
}


@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin: admin = {}; // Removed unnecessary whitespace
  alladmin: alladmin[] = [];
  adminid?: string;
  password?: string; // Changed 'any' to 'string'
  rememberme?: any;
  rememberme1?: any;
  sessionrememberme?: any;
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  showPassword = false;
  
  constructor(private router: Router, private serviceService: ServiceService) {}

  ngOnInit(): void {
    const gothrough = localStorage.getItem('gothrough');
    const gothrough1 = sessionStorage.getItem('gothrough');

    console.log(gothrough);

    if (gothrough === 'gothrough') {
      this.router.navigate(['admin']);
    }
    if (gothrough1 === 'gothrough') {
      this.router.navigate(['admin']);
    }

    this.serviceService.retrieveadmininfo().subscribe(
      (admin) => (this.alladmin = admin)
    );
  }

  bd() {
    console.log(this.alladmin);
  }
  handleLogin() {
    const x = localStorage.getItem('checked');

    var login = this.alladmin.map(({ adminid, password }) => ({
      adminid,
      password
    }));

    for (var i = 0; i < login.length; i++) {
      if (
        this.adminid === login[i].adminid &&
        this.password === login[i].password
      ) {
        if (x === 'checked') {
          localStorage.setItem('password', 'admin');
          localStorage.setItem('username', 'admin');
          this.rememberme1 = 'gothrough';
          localStorage.setItem('gothrough', this.rememberme1);
          this.router.navigate(['admin']);
        } else {
          localStorage.setItem('password', 'admin');
          localStorage.setItem('username', 'admin');
          this.sessionrememberme = 'gothrough';
          sessionStorage.setItem('gothrough', this.sessionrememberme);
          this.router.navigate(['admin']);
        }
      } else {
        this.invalidLogin = true;
      }
    }
  }

  signup() {
    this.router.navigate(['signup']);
    alert('BDF');
  }

  myFunction() {
    var chkPrint = <HTMLInputElement>document.getElementById('chkPrint');
    if (chkPrint.checked) {
      chkPrint.value = 'true';
      this.rememberme = 'checked';
      localStorage.setItem('checked', this.rememberme);
      const x = localStorage.getItem('checked');
      console.log(x);
    }
  }

  
}
