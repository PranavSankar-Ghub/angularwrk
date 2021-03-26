import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardnewService } from '../authguardnew.service';
import { HomeComponent } from './home/home.component';
import { LoginwrkComponent } from './loginwrk/loginwrk.component';
import { UserwrkComponent } from './userwrk.component';

const routes: Routes = [{ path: 'userwrk', component: UserwrkComponent },{path:'home',component:HomeComponent,canActivate:[AuthguardnewService]},{path:'login',component:LoginwrkComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserwrkRoutingModule { }
