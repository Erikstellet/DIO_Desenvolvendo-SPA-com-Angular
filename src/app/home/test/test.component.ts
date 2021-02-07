import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { News } from './news';
import { TestService } from './test.service';

@Component
({
  selector: 'spa-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit
{
  news: News[] = [];

  constructor(private breakpointObserver: BreakpointObserver,
              private testService: TestService) {}

  ngOnInit(): void
  {
    this.news = this.testService.retrieveAll();
  }

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
