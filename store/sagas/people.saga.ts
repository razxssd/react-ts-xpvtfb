import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { getAllPeopleSuccess } from '../reducers/people.reducer';
import { PEOPLE_REFRESH_REQUESTED } from './root.saga';
import { IValue } from '../../core';
import { PEOPLE_URL } from '../../core/CONST';

/*
 * Worker
 **/
export function* peopleReceiveAll() {
  try {
    const { data } = yield call(axios.get, PEOPLE_URL);
    const peopleArr =
      data && data.value
        ? data.value.map((person: IValue) => ({
            FirstName: person.FirstName,
            LastName: person.LastName,
            Gender: person.Gender,
            Age: person.Age,
            Emails: person.Emails,
            UserName: person.UserName,
          }))
        : [];

    yield put(getAllPeopleSuccess(peopleArr));
  } catch (e) {
    console.log('ERROR on People saga: ', e);
  }
}

/*
 * Watcher
 **/
export default function* watchPeopleReceiveAll() {
  yield takeLatest(PEOPLE_REFRESH_REQUESTED, peopleReceiveAll);
}
