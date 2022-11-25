import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component implements OnInit {
  textInput2: any;
  @Output() textEvent2 = new EventEmitter();

  @Input() oneToTwo: any;


  constructor() { }
  counter2(action: string) {
    this.textInput2 = this.textInput2;
    this.textEvent2.emit(this.textInput2);



  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
