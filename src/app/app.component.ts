import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bj-todo-list';

  constructor() {
    // setTimeout(() => {
    //   this.title = 'Learnings';
    // }, 3000);
  }
}
