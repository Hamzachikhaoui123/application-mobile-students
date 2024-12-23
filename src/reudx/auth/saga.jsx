import { put, call, delay, takeEvery } from "redux-saga/effects";
import { loginApi } from "../../api/services/login";
import { CLEAR_USER, ERROR_LOGIN, LOGIN, LOGOUT, SUCCESS_LOGIN } from "./type";
export default function* authServiceSaga() {
    yield takeEvery(LOGIN,login)

}

function* login(action) {



    try {
        const response = yield call(loginApi,action.payload)
        console.log("res",response);
        yield put({ type: SUCCESS_LOGIN, res: response })
        yield put({ type: CLEAR_USER });
    } catch (_err) {
        console.log("err",_err);
        yield put({ type: ERROR_LOGIN, err: _err });
        yield put({ type: CLEAR_USER });
    }
}