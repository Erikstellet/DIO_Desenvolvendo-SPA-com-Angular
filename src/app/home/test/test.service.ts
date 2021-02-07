import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable
({
  providedIn: 'root'
})
export class TestService
{
  retrieveAll(): News[]
  {
    return NEWS;
  }
}

var NEWS: News[] =
[
  {
    id: 1,
    title: 'Os Filmes de 2021',
    imageUrl: 'assets/image/thumb/kong-and-godzzila.jpg',
    text: 'Os mais esperados de 2021'
  },
  {
        id: 2,
        title: 'Prince of Persia',
        imageUrl: 'assets/image/thumb/price-of-persia.jpg',
        text: 'Remake do game é adiado mais uma vez'
  },
  {
        id: 3,
        title: 'ATTACK ON TITAN',
        imageUrl: 'assets/image/thumb/atack-on-titan.jpg',
        text: 'Anime conta o segredo por trás do ataque de Eren'
  },
  {
        id: 4,
        title: 'Dr. Stone',
        imageUrl: 'assets/image/thumb/dr-stone.jpg',
        text: 'A segunda temporada Stone Wars já começou!'
  }
]
