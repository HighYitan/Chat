import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ChatComponent } from 'src/app/pages/chat/chat.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/login' },
  { path:'login', component: LoginComponent },
  { path:'signup', component: SignupComponent },
  { path: 'chat', component: ChatComponent },
  { path:'**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
