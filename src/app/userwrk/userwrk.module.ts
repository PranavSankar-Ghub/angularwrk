import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

import { UserwrkRoutingModule } from './userwrk-routing.module';
import { UserwrkComponent } from './userwrk.component';
import { HomeComponent } from './home/home.component';
import { LoginwrkComponent } from './loginwrk/loginwrk.component';


@NgModule({
  declarations: [UserwrkComponent, HomeComponent, LoginwrkComponent],
  imports: [
    CommonModule,
    UserwrkRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class UserwrkModule { }
