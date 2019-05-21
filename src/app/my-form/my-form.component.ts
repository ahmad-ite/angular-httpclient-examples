import { Component, OnInit,Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
 

  // if (True) {
  //   @Input()
    
  //   user ={
  //     name:"aaa",
  //     username:"",
  //     email:""
  //   };
  // }
  @Input() 
  // if (){}
  edit_mode=false;
  user={
    id:"",
    name:"aaa",
    username:"",
    email:""
  }; 
  users=[]
  constructor(public emp :EmployeeService) {
    if (!this.edit_mode){
    this.user ={
      id:"",
      name:"aaa",
      username:"",
      email:""
    }; 
  }
    // @Input() user ={
    //   name:"aaa",
    //   username:"",
    //   email:""
    // };
    emp.getUsers().subscribe((u)=>{
      console.log("Ssss");
      console.log(u);
      this.users=u;
    },error=>{
      console.log(error);
    });


   }

  ngOnInit() {
  }
  addUser(){
    // this.emp.createEmp(this.user).subscribe
    // if (this.user.id){
    //   // this.edit_mode=false;
    //   this.emp.editEmp(this.user.id,this.user).subscribe((result) => {
    //     // this.router.navigate(['/product-details/'+result._id]);
    //     // this.users.unshift(result)
    //     console.log(result);
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }
    // else{
    this.emp.createEmp(this.user).subscribe((result) => {
      // this.router.navigate(['/product-details/'+result._id]);
      this.users.unshift(result)
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  // }
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
  editUser(id,user){
    this.user=user;
    this.edit_mode=true;
  }
  editUser1(id,user){
    // this.emp.createEmp(this.user).subscribe
    console.log("the is is "+id)
    this.emp.editEmp(id,user).subscribe((result) => {
      console.log("updated");
      // for (let index = 0; index < this.users.length; index++) {
      //   if (this.users[index].id==id) {
      //     console.log("jjjjjjjjjjjj");
      //     this .users.splice(index,1);
          
      //   }
      // }
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
