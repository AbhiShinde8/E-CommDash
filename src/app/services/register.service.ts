import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url="http://localhost:3000/register";  //कोणत्या path वर रिक्वेस्ट पाठवायची तो path  कोणाला data पाठवायचा 

  //सर्वात आधी http ला इम्पोर्ट करावे लागते 

  constructor(private http:HttpClient) { }

// ह्या servicla इंपोर्ट करायचे ragister component मध्ये  constructor च्या आत 
  registerUser(data:any){
    return this.http.post(this.url, data)   //data म्हणजे कोणत्य data ला पाठवायचे आहे तो  फॉर्म मधून आपण data आणतो 
                //  http is import in app.Config.ts file ,into provider  provideHttpClient() }this use angular 17 not older versions    
  }
}
