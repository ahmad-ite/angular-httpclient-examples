import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params }from '@angular/router'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  id=""
  constructor(private router:Router,private route:ActivatedRoute) {
    this.route.params.subscribe((param)=>{
     this.id=param.id
    });
   }

  ngOnInit() {
  }

}
