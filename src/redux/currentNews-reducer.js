import {
  newsAPI
} from "../api/api";

const SET_CURRENT_NEWS = 'SET_CURRENT_NEWS';
const TOGGLE_IS_FETCHING_CURRENT_NEWS = 'TOGGLE_IS_FETCHING_CURRENT_NEWS';

let initialState = {
  currentNews: {},
  isFetching: false,
};


const currentNewsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CURRENT_NEWS:
      return {
        ...state, currentNews: action.data,
      }

      case TOGGLE_IS_FETCHING_CURRENT_NEWS:
        return {
          ...state, isFetching: action.isFetching
        }
        default:
          return state;
  }
}

export const setCurrentNews = (data) => ({
  type: SET_CURRENT_NEWS,
  data
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING_CURRENT_NEWS,
  isFetching
});

export const getCurrentNews = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    newsAPI.getCurrentNewsInfo(id).then(data => {
      dispatch(setCurrentNews(data));
      dispatch(toggleIsFetching(false));
    })
  }
};

export default currentNewsReducer;