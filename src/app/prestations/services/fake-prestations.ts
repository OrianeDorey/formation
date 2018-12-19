import { Prestation } from 'src/app/shared/models/prestation.model';

export const fakePrestation: Prestation[] = [
  new Prestation({
    id: 'dsfds',
    typePresta: 'Formation',
    client: 'Truc',
    nbJours: 10,
    comment: 'WooooooooW'
  }),
  new Prestation({
    id: 'ljmjk',
    typePresta: 'Coaching',
    client: 'Capgemini',
    nbJours: 12,
    comment: 'Cap ou pas cap?'
  })
];
