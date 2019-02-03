import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { FormsModule } from '@angular/forms'
import { UserDetailsService } from './user-details.service';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    AdminLoginComponent,
    RegistrationComponent,
    AdminPageComponent,
    EmployeePageComponent,
    EditUserDetailsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
