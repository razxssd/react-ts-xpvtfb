import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { peopleState } from './reducers/people.reducer';
import watchPeopleReceiveAll from './sagas/people.saga';

const sagaMiddleware = createSagaMiddleware();

const RootReducer = combineReducers({
  peopleState: peopleState.reducer,
});

export const Store = configureStore({
  reducer: RootReducer,
  devTools: true,
  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchPeopleReceiveAll);

export type RootState = ReturnType<typeof RootReducer>;
