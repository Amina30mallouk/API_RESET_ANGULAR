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

  MyTask : Task = {label : '',
  completed: false };
  
tasks: Task[] = [] ;  
  constructor(private taskService : TasksService ) { }

  ngOnInit() {
this.getTasks(); 
  }
getTasks(){
this.taskService.findAll() 
     .subscribe(tasks => this.tasks = tasks);
}
deleteTask(id:any){
  this.taskService.delete(id)
  . subscribe(()=> {
this.tasks = this.tasks.filter(task => task.id != id)
  })
}

persistTask(){
  this.taskService.persist(this.MyTask)
  .subscribe((task)=>{
    this.tasks = [task, ...this.tasks]
  })
  this.resetTask();
}

resetTask(){
  this.MyTask = {
    label :'',
    completed: false
  }
   
}
// completedTask(task:Task){
//   this.taskService.completed(task.id,task.completed)
//        .subscribe(()=> {
//     task.completed = !task.completed
    
//   })
// }

editTask(task:Task){
  this.MyTask = task ;

}
updatetask(){
  this.taskService.updateTask(this.MyTask)
      .subscribe((task) => {
        this.resetTask();
        
      })
}
 
} 
