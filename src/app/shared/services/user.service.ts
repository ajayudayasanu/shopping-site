import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import firebase from 'firebase';
import { AppUser } from '../models/app-User';

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

  get(uid :string):Observable<AppUser> {
    return this.db.doc<AppUser>('/users/'+uid).valueChanges()
  }

 
}
