import { Component,ElementRef, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent {
  showFinanceInfo: boolean = false;
  showDevelopmentInfo: boolean = false;
  showITInfo: boolean = false;
  showProductionInfo: boolean = false;
  showHRInfo: boolean = false;
  showGeneralAffairsInfo: boolean = false;

  imageUrl = 'assets/logo.png';
  talent_1 = 'assets/talent_1.png';
  talent_2 = 'assets/talent_2.png';
  talent_3 = 'assets/talent_3.png';
  talent_4 = 'assets/talent_4.png';
  talent_5 = 'assets/talent_5.png';

  constructor(private router: Router, private elementRef: ElementRef) { 
  
     
  }

  
  Finance() {this.findAndScrollToWord("Finance"); this.showFinanceInfo= true; 
  setTimeout(() => {
    this.showFinanceInfo = false;
  }, 1000);
}
  Development() {this.findAndScrollToWord("Development"); this.showDevelopmentInfo= true; setTimeout(() => {
    this.showDevelopmentInfo = false;
  }, 1000); }


  GeneralAffairs() {this.findAndScrollToWord("General Affairs"); this.showGeneralAffairsInfo= true; setTimeout(() => {
    this.showGeneralAffairsInfo = false;
  }, 1000); }



  IT() {this.findAndScrollToWord("IT"); this.showITInfo= true;  
  setTimeout(() => {
    this.showITInfo = false;
  }, 1000);}

  Production() {this.findAndScrollToWord("Production"); this.showProductionInfo= true;  setTimeout(() => {
    this.showProductionInfo = false;
  }, 1000);}

  ProductionControl() {this.findAndScrollToWord("Production Control"); this.showProductionInfo= true;  setTimeout(() => {
    this.showProductionInfo = false;
  }, 1000);}

 
  HR() {this.findAndScrollToWord("Human Resource"); this.showHRInfo= true;  setTimeout(() => {
    this.showHRInfo = false;
  }, 1000);}
 


  Assembly() {this.findAndScrollToWord("Assembly"); this.showHRInfo= true;  setTimeout(() => {
    this.showHRInfo = false;
  }, 1000);}

  Injection() {this.findAndScrollToWord("Injection"); this.showHRInfo= true;  setTimeout(() => {
    this.showHRInfo = false;
  }, 1000);}

  Engineering(){this.findAndScrollToWord("Engineering"); this.showHRInfo= true;  setTimeout(() => {
    this.showHRInfo = false;
  }, 1000);}


@ViewChild('scrollToElement', { static: true }) scrollToElement!: ElementRef;
findAndScrollToWord(word: string) {
  const elementsWithWord = this.scrollToElement.nativeElement.querySelectorAll('*');
  for (const element of elementsWithWord) {
    // Check if the element is an HTMLElement (not a text node) and contains the word
    if (element instanceof HTMLElement && element.innerText.includes(word)) {

      element.scrollIntoView({ behavior: 'smooth' });
       
      break;
    }
  }
}




}
