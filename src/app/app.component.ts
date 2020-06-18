import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card';
  user:any;

  constructor(private userService:UserService,
    private toastr:ToastrService
    ){}

  ngOnInit(){

    this.refresh();

  }

  refresh(){
    this.user=null
    this.userService.getUser().subscribe(
      (data:any)=>{
        console.log(data)
        this.user=data.results[0]
      },
      err=>{
        this.toastr.error(err.status,'Oops')
      }
    )
  }

}
