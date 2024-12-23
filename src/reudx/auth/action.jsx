import { CLEAR_USER, LOGIN } from "./type";

export const LoginAction = (data) => ({ type: LOGIN, payload: data });
export const clear = () => ({
    type: CLEAR_USER,
  });