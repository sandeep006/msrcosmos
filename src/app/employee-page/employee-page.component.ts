import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  constructor(private _userDetailsSrv: UserDetailsService, private _router: Router) { }
  public userDetails = this._userDetailsSrv.user;
  ngOnInit() {
    this.getUser();
  }
  public getUser = ()=>{
    console.log(this.userDetails);
  }
public edit = ()=>{
  this._router.navigate(['/edit_user_details']);
}

}
