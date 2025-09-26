import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from './store/store';
import { Observable } from 'rxjs';
import { decreament, increament } from './store/counter.action';
import { CommonModule } from '@angular/common';
import { selectCount } from './store/counter.selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx-test';
  counter$!: Observable<number>;

  constructor(private store: Store<AppState>) {
    // this.counter$ = this.store.pipe(select('count'));
    this.counter$ = this.store.pipe(select(selectCount));
  }

  increament() {
    this.store.dispatch(increament());
  }

  decreament() {
    this.store.dispatch(decreament());
  }
}
