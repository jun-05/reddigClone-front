import { RootState } from '..';
import { User } from '../../types/User';
import { ThunkAction } from 'redux-thunk';
import { signUpUser } from './../../api/auth/registerAPI';
import { getRegisterAction } from './actions';
import { RegisterAction } from './types';


export function registerThunk(user: User): ThunkAction<void, RootState, null, RegisterAction> {
  return async (dispatch) => {
    const { request, success, failure } = getRegisterAction();
    dispatch(request());
    try {
      const resp = await signUpUser(user);
      dispatch(success(resp.data));
    } catch (e:any) {
      dispatch(failure(e));
    }
  };
}