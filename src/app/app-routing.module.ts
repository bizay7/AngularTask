import { Counter2Component } from './MyFirstComponents/counter2/counter2.component';
import { MyCounterComponent } from './MyFirstComponents/my-counter/my-counter.component';
import { TodosComponent } from './MyFirstComponents/todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Counter1Component } from './MyFirstComponents/counter1/counter1.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'counter', component: MyCounterComponent },
  { path: 'task2', component: Counter1Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
