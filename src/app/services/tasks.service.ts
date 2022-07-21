import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { Task } from 'src/app/models/task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

 findAll(){

return this.http.get<Task[]>("http://localhost:3000/tasks"); 
 }

}
 