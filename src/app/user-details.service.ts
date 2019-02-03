import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  public users = [{
    profileImage: "./../../assets/profile_images/5d234221ee76a055ebfa9f3c514876b2--little-boys-fashion-boy-fashion.jpg",
    name: "Sandeep",
    email: "sandeep@gmail.com",
    role: "Admin",
    DOB: "08/09/1995",
    address: "Ameerpet, Hyderabad",
    password: "sandeep@123"
  },{
    profileImage: "./../../assets/profile_images/9bdf7e5f8d2a1da7e0479b6cd0bb9bb8.jpg",
    name: "Rahul",
    email: "rahul@gmail.com",
    role: "Admin",
    DOB: "06/04/1996",
    address: "Madhapur, Hyderabad",
    password: "rahul@123"
  },{
    profileImage: "./../../assets/profile_images/fashion-2561753_960_720.jpg",
    name: "Shreyansh",
    email: "shreyansh@gmail.com",
    role: "Employee",
    DOB: "05/03/1995",
    address: "JubilliHills, Hyderabad",
    password: "shreyansh@123"
  },{
    profileImage: "./../../assets/profile_images/Shubh-Chandra-Cover.jpg",
    name: "Shivam",
    email: "shivam@gmail.com",
    role: "Employee",
    DOB: "08/09/1995",
    address: "SR Nagar, Hyderabad",
    password: "shivam@123"
  },{
    profileImage: "./../../assets/profile_images/stylish-boy-2269500_960_720.jpg",
    name: "Satish",
    email: "satish@gmail.com",
    role: "Employee",
    DOB: "08/09/1995",
    address: "Hi-tech City, Hyderabad",
    password: "satish@123"
  }];

  public user;
  public token;

  constructor() { }

  public details = (user)=>{
    this.user = user;
    return user;
  }

  public updateDetails = (userDetails)=>{
    this.users.find((element)=>{
      if(element === this.user){
        element = userDetails;
        return true;
      }
    });
  }

  public isToken = ()=>{
      return !!localStorage.getItem("token");
    
  }
}
