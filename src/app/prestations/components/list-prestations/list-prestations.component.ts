import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {

  public collection: Prestation[];
  public headers: string[];


  constructor(
    private ps: PrestationService // si on déclare en private, ps n'est pas accessible dans le HTML
  ) { }

  ngOnInit() {
    this.collection = this.ps.collection; // copie par référence
    this.headers = [ 'type', 'client', 'nb jours', 'tjmHt', 'total ht', 'total ttc', 'state' ];

  }


}
