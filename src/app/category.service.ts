import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  getAll(): Observable<any[]> {
    return this.db
      .list("/categories", ref => {
        const q = ref.limitToLast(25).orderByChild("name");
        return q;
      })
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }
}
