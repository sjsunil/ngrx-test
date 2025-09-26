import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from './store/store';
import { Observable } from 'rxjs';
import { decreament, increament } from './store/counter.action';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx-test';
  counter$!: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.pipe(select('count'));
  }

  increament() {
    this.store.dispatch(increament());
  }

  decreament() {
    this.store.dispatch(decreament());
  }
}
