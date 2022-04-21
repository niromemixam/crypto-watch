export const SET_FAV_LENGTH = "SET_FAV_LENGTH";
export const INCR_FAV_LENGTH = "INCR_FAV_LENGTH"
export const DECR_FAV_LENGTH = "DECR_FAV_LENGTH"

export const setFavLength = (num) => {
  return (dispatch) => {
    return dispatch({ type: SET_FAV_LENGTH, payload: num });
  };
};

export const incrFavLength = () => {
    return (dispatch) => {
        return dispatch({ type : INCR_FAV_LENGTH})
    }
}

export const decrFavLength = () => {
    return (dispatch) => {
        return dispatch({ type : DECR_FAV_LENGTH})
    }
}