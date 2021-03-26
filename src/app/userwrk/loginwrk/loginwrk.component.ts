import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserwrkService } from 'src/app/userwrk.service';
import { Home } from '../home';
import { Loginwrk } from '../loginwrk';

@Component({
  selector: 'app-loginwrk',
  templateUrl: './loginwrk.component.html',
  styleUrls: ['./loginwrk.component.css']
})
export class LoginwrkComponent implements OnInit {
  user:any
  pass:any
  userwrklist:Home[]=[]
  loginsuccess:any
  url:any
  constructor(private route:Router,private user1:UserwrkService) { }

  ngOnInit(): void {
    this.user1.readUser().subscribe(data=>{
      this.userwrklist=data.map((doc)=>{
        return{
        id:doc.payload.doc.id,
        ...doc.payload.doc.data() as {}
        } as Home
      })
    })
    this.url="/userwrk/home"
  }
  login=new Loginwrk()
loginnew(){

this.user=this.login.username
this.pass=this.login.password
for( let i of this.userwrklist){
  if(this.user==i.username && this.pass==i.password){
    this.loginsuccess="true"
    localStorage.setItem("isLoggedIn","true")
    localStorage.setItem("username",this.login.username)
      this.route.navigate([this.url])
  }
}
if( this.loginsuccess=="false")
  alert("login failed")

}
}
