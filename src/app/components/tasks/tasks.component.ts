import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import  { Task } from 'src/app/models/task';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
tasks: Task[] = [] ;  
  constructor(private taskService : TasksService ) { }

  ngOnInit() {
this.getTasks(); 
  }
getTasks(){
this.taskService.findAll() 
     .subscribe(tasks => this.tasks = tasks);
}

} 
