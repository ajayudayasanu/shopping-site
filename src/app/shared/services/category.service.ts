import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private db: AngularFirestore) {}

  getCategories() {
    let categoriesCollectionRef = this.db.collection('/categories/',query => query.orderBy('name','asc'));
    return categoriesCollectionRef.valueChanges();
   
  }
}


