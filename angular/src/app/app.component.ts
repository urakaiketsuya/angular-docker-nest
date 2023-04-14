import { Component } from '@angular/core';
import { TaskService } from './task.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  // title = 'todo';
  // filter: 'all' | 'active' | 'done' = 'all';

  tasks = new Array<any>();
  
  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(response => {
        this.tasks = response;
    });
  }

  addItem(description: string) {
    this.tasks.unshift({
      description,
      done: false
    });
  }

  removeItem(task: any) {
    this.tasks = this.tasks.filter(function( item ) {
      return item.description !== task.description;
  });
  }

}