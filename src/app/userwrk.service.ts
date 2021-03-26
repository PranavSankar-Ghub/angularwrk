import { Injectable } from '@angular/core';

import { AngularFirestore } from  '@angular/fire/firestore';
import { Home } from './userwrk/home';
@Injectable({
  providedIn: 'root'
})
export class UserwrkService {

  constructor( private data:AngularFirestore) { }
  userSave(home:Home){
    console.log(home)
    this.data.collection("userwrk").add({...home})

  }
  readUser(){
    return this.data.collection("userwrk").snapshotChanges()
  }
  editUser(home:Home){
    this.data.doc("userwrk/").update(home)
  }
  deleteUser(home:Home){
    this.data.doc("userwrk/").delete()
  }
}
