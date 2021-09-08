import {
  newsAPI
} from "../api/api";

const SET_NEWS = 'SET_NEWS';
const TOGGLE_IS_FETCHING_NEWS = 'TOGGLE_IS_FETCHING_NEWS';
const UPDATE_REFRESH_TIMEOUT = 'UPDATE_REFRESH_TIMEOUT';

let initialState = {
    news: [],
    pageSize: 10,
    totalUsersCount: 0,
    timer: 59,
    // totalUsersCount: 0,
    // currentPage: 1,
     isFetching: false,
    // followingInProgress: [],
  };

  
  const newsReducer = (state = initialState, action) => {
    switch (action.type) {

      case SET_NEWS:
        return {
          ...state, news: [...action.news]
        }
        case TOGGLE_IS_FETCHING_NEWS:
          return {
            ...state, isFetching: action.isFetching
          }
          case UPDATE_REFRESH_TIMEOUT:
            return {
              ...state, timer: action.timer
            }
        default:
          return state;
    }
  }


  export const setNews = (news) => ({
    type: SET_NEWS,
    news
  });

  export const setRefreshTimeout = (timer) => ({
    type: UPDATE_REFRESH_TIMEOUT,
    timer
  });

  export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING_NEWS,
    isFetching
  });

  export const getTimeout = (timer) => {
    return (dispatch) => {
        dispatch(setRefreshTimeout(timer));
    //   dispatch(toggleIsFetching(true));
    //   newsAPI.getNews().then(data => {
    //     //debugger;
        
    //     dispatch(setNews(data));
    //     dispatch(toggleIsFetching(false));
    //   })
    }
  };

  export const getNews = () => {
    return (dispatch) => {
      
      dispatch(toggleIsFetching(true));
      newsAPI.getNews().then(data => {
        //debugger;
        
        dispatch(setNews(data));
        dispatch(toggleIsFetching(false));
      })
    }
  };

  export default newsReducer;