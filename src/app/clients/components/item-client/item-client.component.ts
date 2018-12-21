import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientService } from 'src/app/prestations/services/client.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {

  @Input() item: Client;
  public states = StateClient;
  public faTrashAlt = faTrashAlt;

  constructor(
    private cs: ClientService
  ) { }

  ngOnInit() {
  }

  public changeState(event) {
    const state = event.target.value;
    this.cs.update(this.item, state);
  }

  public onDelete(item: Client) {
    this.cs.delete(item);
  }
}
