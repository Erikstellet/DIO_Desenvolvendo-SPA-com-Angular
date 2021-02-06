import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'spa-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit
{
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private breakpointObserver: BreakpointObserver, private fb: FormBuilder) {}

  ngOnInit(): void
  {

  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { image: 'src/assets/image/PS5.jpg', title: 'Novidades', subtitle: 'ABC', cols: 1, rows: 1 },
          { image: 'src/assets/image/PS5.jpg', title: 'Resenha', subtitle: 'ABC', cols: 1, rows: 1}
        ];
      }

      return [
        { image: 'src/assets/image/PS5.jpg', title: 'Novidades', subtitle: 'ABC', cols: 1, rows: 1 },
        { image: 'src/assets/image/PS5.jpg', title: 'Resenha', subtitle: 'ABC', cols: 1, rows: 1 }
      ];
    })
  );

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
