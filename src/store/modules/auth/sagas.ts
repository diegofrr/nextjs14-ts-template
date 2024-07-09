import type { User } from '@/interfaces/ReduxState';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { actions } from './reducer';

function* getUserInfo() {
  try {
    const response: Response = yield call(getInfo);
    const userData: User = yield call([response, response.json]);

    yield put(actions.successUserInfo(userData));
  } catch (error) {
    yield put(actions.failureUserInfo((error as Error).message));
  }
}

// services
async function getInfo(): Promise<Response> {
  return await fetch('#');
}

export default function* authSaga() {
  yield all([takeLatest(actions.requestUserInfo.type, getUserInfo)]);
}
