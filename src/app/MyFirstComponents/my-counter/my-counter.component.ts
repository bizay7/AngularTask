import { Component } from '@angular/core';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count = 0;
  counter(action: string) {
    if (action == '+') {
      this.count++;
    }
    else if (action == '-') {
      if (this.count == 0) {
        this.count = 0;
      }
      else {
        this.count--;

      }
    }
    else {
      this.count = 0;
    }
  }

}
