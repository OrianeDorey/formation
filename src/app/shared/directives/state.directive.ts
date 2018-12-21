import { Directive, Input, OnChanges, HostBinding } from '@angular/core';
import { State } from '../enums/state.enum';
import { StateClient } from '../enums/state-client.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() appState: any;

  @HostBinding('class') nomClass: string;
  constructor() {

  }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);

   }

   // 'Option' => 'state-option'
   // 'Annule' => 'state-annule'
   // 'Confirme' => 'state-confirme'
   // 'Facture payée' => 'state-facturepayee'
   private formatClass(state: any): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}`;
   }

}
