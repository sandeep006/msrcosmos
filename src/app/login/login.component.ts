import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router'
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: String;
  public password: String;
  public error: String;
  constructor(private _router: Router, private _userDetailsSrv: UserDetailsService) { }
  public users = this._userDetailsSrv.users;
  ngOnInit() {
  }
  public authentication = () => {
    let user;
    this.users.find((element) => {
      if (element.email === this.email) {
        user = element;
        return true;
      }
    });
    console.log(user);

    if (user.password === this.password) {
      if (user.role === "Admin") {
        localStorage.setItem("token", user.name);
        this._router.navigate(['/admin_page']);
      } else if (user.role === "Employee") {
        localStorage.setItem("token", user.name);
        this._userDetailsSrv.details(user);
        this._router.navigate(['/employee_page']);
      }
    } else {
      console.log(user.password);
      console.log(this.password);
      console.log("Incorrect Password");
      this.error = "Incorrect Password";
    }
  }

}

