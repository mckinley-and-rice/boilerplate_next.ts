import { all, call, delay, put, take, takeLatest, fork, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { actApiSuccess, actApiFail } from '../actions/actApiExample';
import {
  EActionTypesApiExample,
  IActApiRequest,
} from '../interfaces/iApiExample/iApiExampleAct.interfaces';
import { IApiResult } from '../interfaces/iApiExample/iApiExample.interfaces';
import { fetchData } from "../utils/api/http-calls";
import data from "../utils/db.json";

function* apiRequest(action: IActApiRequest) {
  // try {
  //   const headers = { headers: { Authorization: 'bearer ' } };
  //   const id = action.id;
  //   // const formData = new FormData();
  //   // formData.append('id', id);
  //   const params = { id: id };

  //   const { status, data }: AxiosResponse<IApiResult> = yield call(
  //     axios.post,
  //     '/api/animal',
  //     params,
  //     headers,
  //   );

  //   if (status === 200) {
  //     yield put(actApiSuccess(data));
  //   }
  // } catch (err) {
  //   yield put(actApiFail(err));
  // }

  //data through API call host json data on localhost using json server on port [3001]
    // try{
    //   const { data } = yield call(fetchData);
    //   console.log("data frm api", data)
    //   yield put(actApiSuccess(data)); 

    // } catch(error){
    //   console.error("error", error);
    //   yield put(actApiFail(error));

    // }

  //directly importing json data 
  yield put(actApiSuccess(data)); 

}

function* watchApiRequest() {
  yield takeEvery(EActionTypesApiExample.API_REQUEST, apiRequest);
}

function* sagaApiExample(): Generator {
  yield all([fork(watchApiRequest)]);
}

export default sagaApiExample;
