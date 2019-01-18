
import * as Types  from '../constants/actionType';

const initialState = {
    isLoading: true,
    isRefreshing: false,
    data: ''
}

export default getMovie = (state = initialState, action) => {
  console.log("Action = ",action.type)
  switch (action.type) {

  case Types.START_FETCHING:
    return { ...state, isLoading: true }

  case Types.FETCH_SUCCESS:
  let t = { ...state, isLoading: false, data: action.data}

  console.log("Result", t)

    return { ...state, isLoading: false, data: action.data}

  case Types.FETCH_FAIL:
  return { ...state}

  default:
    return state
  }
};
