import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthnewService } from 'src/app/authnew.service';
import { UserwrkService } from 'src/app/userwrk.service';
import { Home } from '../home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userwrklist:Home[]=[]
  arr=[]

  constructor( private userwrk1:UserwrkService,private auth:AuthnewService,private router:Router) { }

  ngOnInit(): void {
    this.userwrk1.readUser().subscribe(data=>{
      this.userwrklist=data.map((doc)=>{
        return{
          id:doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as Home        
      })
    })
    

  }
  homewrk= new Home()
  add( arr:Home)
  {
    this.homewrk=arr
  }
  remove(arr:Home){
    this.homewrk=arr
  }
  save(){
    console.log(this.homewrk)
    if(this.homewrk.id==null){
    this.userwrk1.userSave(this.homewrk)
  }
  else{
    this.userwrk1.editUser(this.homewrk)
  }
    }
    Logout(){
      this.auth.logout()
      this.router.navigate(["/userwrk/login"])
      
    }
    logedin(){
      this.router.navigate(["/userwrk/login"])
    }

}
