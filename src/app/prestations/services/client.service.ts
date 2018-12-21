import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private itemsCollection: AngularFirestoreCollection<Client>;
  private _collection$: Observable<Client[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Client>('client');
    this._collection$ = this.itemsCollection.valueChanges().pipe(
      map((data) => {
        return data.map((item) => {
          return new Client(item);
        });
      })
    );
   }

   public get collection$(): Observable<Client[]> {
     return this._collection$;
   }

   public set collection$(col: Observable<Client[]>) {
     this._collection$ = col;
   }


  // add client
  add(item: Client): Promise<any> {
    const id = this.afs.createId();
    const client = { id, ...item };
    return this.itemsCollection.doc(id).set(client).catch((e) => {
      console.log(e);
    });
    // return this.http.post('urlapi/addClient', item);
  }

  update(item: Client, state?: StateClient): Promise<any> {
    const client  = {...item}; // permet de créer un nouvel objet et contourne le passage par référence
    if (state) {
      client.state = state;
    }
    return this.itemsCollection.doc(item.id).update(client).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/Clientupdate/'+item.id, presta);
  }

  public delete(item: Client): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/Clients/delete/${item.id}`);
  }

  getClient(id: string): Observable<Client> {
    return this.itemsCollection.doc<Client>(id).valueChanges();
    // return this.http.get(`urlapi/Clients/get/${id}`);
  }
}
