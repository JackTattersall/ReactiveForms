import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthServiceService {
  token: string;

  constructor() { }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
              }
            )
            .catch(
              // todo handle get user id token failed
              error => console.error(error)
            );
        }
      )
      .catch(
        // todo handle auth failed
        error => console.error(error)
      );
  }
}
