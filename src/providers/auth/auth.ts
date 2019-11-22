import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import * as firebase from 'firebase/app';
// import { AngularFireAuth } from '@angular/fire/auth';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

loginWithFb(){

}
loginWithGoogle(){

}

}
