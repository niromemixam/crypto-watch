export const SEARCH_TOKEN = "SEARCH_TOKEN";

export const searchToken = (data) => {
    return (dispatch) => {
      return dispatch({ type: SEARCH_TOKEN, payload: data })
    }
  }