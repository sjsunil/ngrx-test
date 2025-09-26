import { createSelector } from '@ngrx/store';
import { AppState } from './store';

export const selectCounterSate = (state: AppState) => state.counter;

export const selectCount = createSelector(
  selectCounterSate,
  (state) => state.count
);
