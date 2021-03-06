import {APIBASIC, reducer} from '../../../constants';

export const klaimPrize = data => async dispatch => {
  try {
    dispatch({type: reducer.LOADING, value: true});
    const result = await APIBASIC.post('/ruangguru/v1/prize', data);
    dispatch({type: reducer.LOADING, value: false});
    return result.data;
  } catch (e) {
    dispatch({type: reducer.LOADING, value: false});
    const error = e.response.data;
    throw error;
  }
};

export const findAllPrize = userId => async dispatch => {
  try {
    dispatch({type: reducer.LOADING, value: true});
    const result = await APIBASIC.get(`ruangguru/v1/prize?userId=${userId}`);
    dispatch({type: reducer.LOADING, value: false});
    return result.data.data;
  } catch (e) {
    dispatch({type: reducer.LOADING, value: false});
    const error = e.response.data;
    throw error;
  }
};
