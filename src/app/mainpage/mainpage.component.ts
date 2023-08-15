import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  
 
 
 
  constructor(private router: Router) { }
  ngOnInit(): void {
    
    this.router.navigate([""]);
   
}

 

}
