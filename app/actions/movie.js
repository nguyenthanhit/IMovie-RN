import * as Types from '../constants/actionType';
import {getNowPlaying} from '../api/MovieApi';

export const startFetching = () => {
    return {
        type: Types.START_FETCHING
    }
}

export const getMovieSuccess = (data) => {
    return { type: Types.FETCH_SUCCESS, data}
}

export const getMovieFail = (error) => {
    return {
        type: Types.FETCH_FAIL,
        error
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(startFetching())
        
        getNowPlaying(1).then(response => {
            console.log("Success = ", response)
            dispatch(getMovieSuccess(response.data.results))
        }).catch((error) => dispatch(getMovieFail(error)))
    }
}
