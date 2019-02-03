import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router, private _userDetailsSrv: UserDetailsService) { }

  // public loginStatus = this._userDetailsSrv.isToken();
  ngOnInit() {
  }
  public removeToken = ()=>{
    localStorage.removeItem("token");
  }
}
