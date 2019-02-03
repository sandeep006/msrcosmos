import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"admin_page",component:AdminPageComponent},
  {path:"employee_page",component:EmployeePageComponent},
  {path:"register",component:RegistrationComponent},
  {path:"admin_login",component:AdminLoginComponent},
  {path:"login",component:LoginComponent},
  {path:"edit_user_details",component:EditUserDetailsComponent},
  {path:"logout",component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
