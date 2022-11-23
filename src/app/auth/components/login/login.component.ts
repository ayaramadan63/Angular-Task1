import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb:FormBuilder  , private router:Router
  ) { }
  

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email:['email' , [Validators.required , Validators.email]],
      password:['password' , [Validators.required]],
    })

  }
 


  onLogin(e: string, p: string) {
    var output = this.authService.isUserLoggedIn(e, p);
    if (output ==true) {
      this.router.navigate(['/home']);
      console.log('sucess')

    } else
    {
      alert("Ivalid email or password")
      }


    }
    
  

}
