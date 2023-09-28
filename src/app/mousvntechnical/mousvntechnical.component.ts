import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mousvntechnical',
  templateUrl: './mousvntechnical.component.html',
  styleUrls: ['./mousvntechnical.component.css']
})
export class MousvntechnicalComponent implements OnInit {
  public videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Trust the provided YouTube URL (prevents Angular from sanitizing)
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/GDxhLJq69AI');
  }


  MOU: string[]= [];
  

  bd() {let bd1 = "assets/MOU/" + "MOU.jpg";
  console.log(bd1)
  this.MOU.push(bd1);       
  }


  ngOnInit(): void {  this.bd();}


 
 

}
