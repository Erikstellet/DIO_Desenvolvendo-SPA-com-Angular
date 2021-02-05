import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'spa-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { image: 'src/assets/image/PS5.jpg', title: 'Novidades', name: 'ABC', cols: 1, rows: 1 },
          { image: 'src/assets/image/PS5.jpg', title: 'Resenha', name: 'ABC', cols: 1, rows: 1 },
          { image: 'src/assets/image/PS5.jpg', title: 'Cadastre-se!', name: 'ABC', cols: 1, rows: 1 }
        ];
      }

      return [
        { image: 'src/assets/image/PS5.jpg', title: 'Novidades', name: 'ABC', cols: 1, rows: 2 },
        { image: 'src/assets/image/PS5.jpg', title: 'Resenha', name: 'ABC', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
