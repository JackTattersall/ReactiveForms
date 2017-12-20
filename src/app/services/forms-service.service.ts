import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FormsServiceService {

  constructor() {
  }

  getForm(formName: string) {
    firebase.database().ref('Forms').child(formName).once('value',
      snapshot => {
        console.log(snapshot.val());
      },
      error => {
        // todo handle no form by that name
        console.error(error);
      }
    );
  }
}
