import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  isAuthenticated: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.idToken;
    this.isAuthenticated = afAuth.idToken
      .map(user => user ? true : false);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
