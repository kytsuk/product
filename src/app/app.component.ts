import {Component, OnInit} from '@angular/core';

import * as firebase from 'firebase';
import {AuthService} from "./components/auth/auth.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){

  }
ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyBVwDRs0hBsIYERYjvanNQPz6qwDVaagLQ",
    authDomain: "shop-product.firebaseapp.com"
  })
}

}
