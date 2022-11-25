import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyFirstComponents/todos/todos.component';
import { TodoItemComponent } from './MyFirstComponents/todos/todo-item/todo-item.component';
import { AddTodoComponent } from './MyFirstComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { MyCounterComponent } from './MyFirstComponents/my-counter/my-counter.component';
import { Counter1Component } from './MyFirstComponents/counter1/counter1.component';
import { Counter2Component } from './MyFirstComponents/counter2/counter2.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    MyCounterComponent,
    Counter1Component,
    Counter2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
