import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories(){
    //console.log(this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges());
    return this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges();
  }
}
