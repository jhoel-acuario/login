import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';

const routes: Routes = [
  {path:'', children:[
    {
      path:'login', component:LoginComponent
    },
    {
      path:'forgot', component:ForgotComponent
    },
    {path:'**',redirectTo:'login'}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
