import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFirestore) {}

  /**
   *
   * @param user
   * update/save the user details to the users collection in firebase
   */
  save(user: firebase.User) {
    this.db
      .doc('/users/' + user.uid)
      .set(
        {
          name: user.displayName,
          email: user.email,
        },
        { merge: true }
      )
      .then(() => console.log('user saved successfully'))
      .catch((reason: any) => console.log('user save failed:', reason));
  }
}
