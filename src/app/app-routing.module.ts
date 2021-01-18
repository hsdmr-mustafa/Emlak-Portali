import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SinglePropertyComponent } from './single-property/single-property.component';
import { userloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin/dashboard', canActivate: [AuthGuardService], component: AdminDashboardComponent },
  { path: 'property/:id', canActivate: [AuthGuardService], component: SinglePropertyComponent },
  { path: 'userlogin', component: userloginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'property/:id', component: SinglePropertyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
