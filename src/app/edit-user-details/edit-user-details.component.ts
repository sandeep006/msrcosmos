import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.css']
})
export class EditUserDetailsComponent implements OnInit {

  
  constructor(private _userDetailsSrv: UserDetailsService) { }

  ngOnInit() {
  }
  public userDetails = this._userDetailsSrv.user;
  public updateDetails = ()=>{
    this._userDetailsSrv.updateDetails(this.userDetails);
  }
}
