import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {}
  
  public getTasks(): Observable<any> {
    const url = 'http://localhost:3000/tasks';
    return this.http.get<any>(url);
}
}
