import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/store';
import { CommonModule } from '@angular/common';
import { selectCount } from '../../store/counter.selector';

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  count!: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count = this.store.pipe(select(selectCount));
  }
}
