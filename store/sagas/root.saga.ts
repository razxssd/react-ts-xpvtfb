import { all } from 'redux-saga/effects';
import watchPeopleReceiveAll from './people.saga';

export const PEOPLE_REFRESH_REQUESTED = 'PEOPLE_REFRESH_REQUESTED';

export default function* rootSaga() {
  yield all([watchPeopleReceiveAll()]);
}
