import { createReducer, on } from '@ngrx/store';
import { decreament, increament } from './counter.action';

export const initialState = 1;

export const counterReducer = createReducer(
  initialState,
  on(increament, (state) => state + 1),
  on(decreament, (state) => state - 1)
);
