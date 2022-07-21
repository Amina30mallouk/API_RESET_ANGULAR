import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { Task } from 'src/app/models/task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
apiURL = "http://localhost:3000/tasks";
  constructor(private http: HttpClient) { }

 findAll(){

return this.http.get<Task[]>(this.apiURL); 
 }

 delete(id: any){
  return this.http.delete('${this.apiURL}/${id}');
 }

 persist(task:any){
  return this.http.post<Task>(this.apiURL, task);
 }
completed(id:number,completed:boolean){
  this.http.patch('${this.apiURL}/${id}',{completed:!completed})

}
 updateTask(task:Task){
  return this.http.put('${this.apiURL}/${task.id}', task);
 }

}
 