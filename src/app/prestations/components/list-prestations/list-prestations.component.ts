import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';


@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {

  public collection$: Observable<Prestation[]>; // convention de nommage des observable :finir par $
  public headers: string[];
  public texte = 'Ajouter une prestation';
  // private sub: Subscription;


  constructor(
    private ps: PrestationService // si on déclare en private, ps n'est pas accessible dans le HTML
  ) { }

  ngOnInit() {
    // this.sub = this.ps.collection.subscribe((data) => {
    //   this.collection = data;
    // });
    this.collection$ = this.ps.collection$;
    this.headers = [ 'type', 'client', 'nb jours', 'tjmHt', 'total ht', 'total ttc', 'state', 'delete' ];

  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
