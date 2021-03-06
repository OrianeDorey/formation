import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  nbJours = 0;
  tjmHt = 500;
  tauxTva = 20;
  state = State.OPTION;
  comment: string;

  constructor(fields?: Partial<Prestation>) { // Partial permet d'instancier un objet qui correspond partiellement à l'objet
   if (fields) {
     Object.assign(this, fields); // cible, source
   }

  }

  totalHt(): number {
    return this.tjmHt * this.nbJours;
  }

  totalTtc(tva?: number): number {
    if (!tva) {
      return this.totalHt() * (1 + this.tauxTva / 100);
    }
    if (tva <= 0) {
      return this.totalHt();
    }
    return this.totalHt() * (1 + tva / 100);
  }
}
