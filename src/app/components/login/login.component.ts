import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!:FormGroup
  ngOnInit():void
  {
this.setForm()
  }

  constructor( private _router:Router)
  {
   
  }

  
  setForm(){

    this.loginForm= new FormGroup({
      email:new FormControl('' ,[Validators.required, Validators.email]),
      password:new FormControl('' ,[Validators.required])
    })

  }

 
  submit()
  {
    // console.log(this.loginForm.value);
    if(this.loginForm.valid)
      {
        // this.loginForm.value
        // console.log('true')
        alert("Login Successfully....")
        this._router.navigate(['dashboard'])
      }
      else{
        console.log('False')

      
      }
  }

}
