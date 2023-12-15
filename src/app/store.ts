import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import memberReducer from './reducers/memberReducer';

export const store = configureStore({
  reducer: {
    memberData:memberReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
