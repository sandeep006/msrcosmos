import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './../login/login.component'
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private _userdetailsSrv: UserDetailsService) { }

  ngOnInit() {
  }
  public users = this._userdetailsSrv.users;
}
