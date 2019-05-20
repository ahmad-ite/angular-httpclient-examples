import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import 'rxjs/operator/map'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emloyess:string[];
  items:any[]=[];
  users:any[];

  constructor(private data:EmployeeService) { 
    this.emloyess=data.getEmp();
    data.getItems().subscribe((item)=>{
      this.items.push(item);
    });

    data.getUsers().subscribe((u)=>{
      console.log("Ssss");
      console.log(u);
      this.users=u;
    });

  }

  ngOnInit() {
  }

}
