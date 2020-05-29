const actions = {
  FETCH_DATA: 'FETCH_DATA',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_FAILED: 'FETCH_DATA_FAILED',

  fetchScoreData: (address) => (dispatch) => {
    dispatch({ type: actions.FETCH_DATA, address });
  }
};

export default actions;
