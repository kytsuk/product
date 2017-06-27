import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authservise: AuthService , private router: Router) { }

  ngOnInit() {
  }
  onSignIn(form: NgForm){

    const email = form.value.email;
    const password = form.value.password;
    this.authservise.signinUser(email, password);

  }
}
