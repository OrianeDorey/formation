import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {

  @Input() item: Prestation;
  public states = State;
  public faTrashAlt = faTrashAlt;
  // public states = Object.values(State);// méthode 2
  constructor(
    private ps: PrestationService
  ) { }

  ngOnInit() {
  }

  public changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state).then(() => {
       // message d'erreur ou succès
    });
    // avec un appel http
  //   this.ps.update(this.item, state).subscribe(() => {
  //     // message d'erreur ou succès
  //  });
  }

  public onDelete() {
    this.ps.delete(this.item).then(() => {
      // traiter reponse api
    });
    // cas du http
    // this.ps.delete(item).subscribe(() => {
    //   // traiter reponse api
    // });
  }

  public detail() {
    this.ps.presta$.next(this.item);
    console.log(this.ps.presta$.value);

  }

}
