import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css']
})
export class Counter1Component implements OnInit {


  constructor() { }

  // oneToTwo = document.getElementById("text1");



  textInput1: any;
  textInput2: any;
  oneToTwo: any;
  textInput3: any;


  counter1(action: string) {
    this.textInput2 = this.textInput1;
    this.oneToTwo = this.textInput2;


  }

  receiveText2($event: any) {
    this.textInput3 = $event
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
