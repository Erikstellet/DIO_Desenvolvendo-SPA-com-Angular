import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { News } from './news';

@Component
({
  selector: 'spa-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit
{
  news: News[] = [];

  ngOnInit(): void
  {
    this.news =
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
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { image: 'assets/image/thumb/studio.jpg', title: 'Project-Cast', subtitle: 'Ouça nosso podcast!', cols: 1, rows: 1 },
          { image: 'assets/image/thumb/PS5.jpg', title: 'Resenha', subtitle: 'ABC', cols: 1, rows: 1}
        ];
      }

      return [
        { image: 'assets/image/thumb/studio.jpg', title: 'Project-Cast', subtitle: 'Ouça nosso podcast!', cols: 1, rows: 1 },
        { image: 'assets/image/thumb/PS5.jpg', title: 'Resenha', subtitle: 'ABC', cols: 1, rows: 1 }
      ];
    })
  );
}
