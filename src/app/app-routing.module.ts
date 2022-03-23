import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './home/_components/frontpage/frontpage.component';
//import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  {path: '', component: FrontPageComponent, pathMatch: 'full'}
  //{path: 'login', component: LoginComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
