import { Client } from 'src/app/shared/models/client.model';

export const fakeClients: Client[] = [
  new Client({
    id: 'kdsf',
    name: 'Sarah',
    email: 'sarah.croche@blague.com'
  }),
  new Client({
    id: 'mihb',
    name: 'Pelle',
    email: 'sarah.pelle@blague.com'
  })
];
