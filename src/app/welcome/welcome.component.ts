import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') namkey!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  StartQuiz(){
   localStorage.setItem("name", this.namkey.nativeElement.value); 
  }
  
}
