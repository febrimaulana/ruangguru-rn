import {APIBASIC, reducer} from '../../../constants';

export const verifikasiPhone = data => async dispatch => {
  try {
    dispatch({type: reducer.LOADING, value: true});
    const result = await APIBASIC.post('/ruangguru/v1/login/phone', data);
    dispatch({type: reducer.LOADING, value: false});
    return result.data.data;
  } catch (e) {
    dispatch({type: reducer.LOADING, value: false});
    const error = e.response.data;
    throw error;
  }
};
