import { Component, OnInit,Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
 
  @Input() user ={
    name:"aaa",
    username:"",
    email:""
  };
  users=[]
  constructor(public emp :EmployeeService) {
    emp.getUsers().subscribe((u)=>{
      console.log("Ssss");
      console.log(u);
      this.users=u;
    });


   }

  ngOnInit() {
  }
  addUser(){
    // this.emp.createEmp(this.user).subscribe
    this.emp.createEmp(this.user).subscribe((result) => {
      // this.router.navigate(['/product-details/'+result._id]);
      this.users.unshift(result)
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

  deleteUser(id){
    // this.emp.createEmp(this.user).subscribe
    console.log("the is is "+id)
    this.emp.deletEmp(id).subscribe((result) => {
      // this.router.navigate(['/product-details/'+result._id]);
      // this.users.unshift(result)
      // this.users=result
      console.log("deleted");
      for (let index = 0; index < this.users.length; index++) {
        if (this.users[index].id==id) {
          console.log("jjjjjjjjjjjj");
          this .users.splice(index,1);
          
        }
        
      }
    }, (err) => {
      
      console.log("err");
      console.log(err);
      for (let index = 0; index < this.users.length; index++) {
        if (this.users[index].id==id) {
          this .users.slice(index,1);
          
        }
        
      }
    });
  }
  
}
