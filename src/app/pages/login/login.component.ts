import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormControlDirective } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = "arafehaseel@pseu.edu";
  password = "@#!1Aa";

  form = new FormGroup({
    email : new FormControl('', Validators.required ),
    password : new FormControl('', Validators.required && Validators.minLength(6) && Validators.maxLength(12) )
  });

  login() {
    console.log(this.form.value);
    if(this.form.value.email == this.email && this.form.value.password == this.password)
      alert("hi"); // redirect to home + use guard
     else
      alert("error");
  }

}
