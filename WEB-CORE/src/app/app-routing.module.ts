import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch:'full',redirectTo:'auth'},
  {path:'auth', 
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'page',
    loadChildren:()=>import('./page/page.module').then(m=>m.PageModule)
  },
  { path:'**',redirectTo:'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
