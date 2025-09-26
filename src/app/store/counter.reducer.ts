import { createReducer, on } from '@ngrx/store';
import { decreament, increament } from './counter.action';

export interface countState {
  count: number;
}
export const initialState: countState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increament, (state) => ({ ...state, count: state.count + 1 })),
  on(decreament, (state) => ({ ...state, count: state.count - 1 }))
);
