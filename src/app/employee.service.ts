import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()

export class EmployeeService {
  names:string[];
  obs_items:Observable<Array<string>>;
  constructor(public http:Http ) {
    this.names=["Ahmad","Mhmad","Fesal"]
   }
   
   createEmp(emp){
    return this.http.post
    ('https://jsonplaceholder.typicode.com/users',emp)
    .map(res=>res.json())
    ;
  }
  deletEmp(id){
    return this.http.delete
    ('https://jsonplaceholder.typicode.com/users/'+ id )
    .map(res=>res.json())
    ;
  }
   getUsers(){
     return this.http.get
     ('https://jsonplaceholder.typicode.com/users')
     .map(res=>res.json())
     ;
   }
   getEmp(){
     return this.names;
   }

   getItems(){
    return new Observable(obs=>{
      setTimeout(()=>{
        obs.next("Ahmad");
      },1000);

      setTimeout(()=>{
        obs.next("Mhmad");
      },2000);

      setTimeout(()=>{
        obs.next("Fesal");
      },3000);

      setTimeout(()=>{
        obs.next("Kassem");
      },4000);


      setTimeout(()=>{
        obs.next("Oqla");
      },5000);

      setTimeout(()=>{
        obs.next("Feras");
      },1500);

    });
  }



}
