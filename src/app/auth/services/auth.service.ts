import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

 
  isUserLoggedIn(email:string,password:string) {

    if (email == "admin@123.com" && password == "123")
    {
      localStorage.setItem('email', 'password');
      return true;

    }
    
    else {
      return false;
    }

  }


}
