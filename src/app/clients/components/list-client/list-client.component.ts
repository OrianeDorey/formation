import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from 'src/app/prestations/services/client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  public collection$: Observable<Client[]>;
  public headers: string[];
  public texte = 'Ajouter un client';

  constructor(
    private cs: ClientService
  ) { }

  ngOnInit() {
    this.collection$ = this.cs.collection$;
    this.headers = ['name', 'email', 'state', 'delete'];
  }

}
