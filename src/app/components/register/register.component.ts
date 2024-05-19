import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


   newUrgForm!:FormGroup;   //फॉर्म तयार करण्यासाठी FORMGROUP वापरतात  

   ngOnInit()
   {
    this.setForm();   //SETFORM मेथोड तयार करून NGoNiNIT मध्ये काल केले 

   }

    constructor( //service add keli 
      private _register:RegisterService
    ){

    }




  //  फॉर्म सेट केला आहे .फॉर्म मधला सर्व DATA FETCH करण्यासाठी OBJECT तयार केला NEW वापरून 

   setForm(){

     this.newUrgForm = new FormGroup({
  
      firstname:new FormControl('',[Validators.required]),  //हे नंतर HTML मध्ये BIND करायचे  FormControlName हे वापरायचे 
      lastname:new FormControl('',[Validators.required]),
      contact:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(5)]),
      confirmpassword:new FormControl('',[Validators.required, Validators.minLength(5)]),
  
     })
  }


  register(){
    console.log(this.newUrgForm.value)   //DATA DISPLAY होतो फॉर्म मधला 
    // console.log(this.newUrgForm.valid)   //check form data is valid or not 
// return false;

if(this.newUrgForm.valid)
  {

    this._register.registerUser(this.newUrgForm.value).subscribe((data:any)=>{
      console.log(data) //here is service was call
      alert(data.msg)
      this.newUrgForm.reset()

      
    })
  }
  else{
    alert("Please fill the all Information");
  }
  }
   }

