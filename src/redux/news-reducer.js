import {
  newsAPI
} from "../api/api";

const SET_NEWS = 'SET_NEWS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    news: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
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

        default:
          return state;
    }
  }


  export const setNews = (news) => ({
    type: SET_NEWS,
    news
  });

  export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
  });

  export const getNews = () => {
    return (dispatch) => {
      
      dispatch(toggleIsFetching(true));
      newsAPI.getNews().then(data => {
        debugger;
        dispatch(toggleIsFetching(false));
        dispatch(setNews(data));
      })
    }
  };

  export default newsReducer;