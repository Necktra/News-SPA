import {
  newsAPI
} from "../api/api";

const SET_CURRENT_NEWS = 'SET_CURRENT_NEWS';
//const SET_COMMENT_INFO = 'SET_COMMENT_INFO';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    currentNews: {},
    parentComments: [],
    //currentCommentsBranch: [],

    // news: [],
    // pageSize: 10,
    // totalUsersCount: 0,
    // currentPage: 1,
    isFetching: false,
  };

  
  const currentNewsReducer = (state = initialState, action) => {
    switch (action.type) {

      case SET_CURRENT_NEWS:
        //debugger;
        return {
          ...state, currentNews: action.data, parentComments: [...action.data.kids]
        }

        // case SET_COMMENT_INFO:
        //   //debugger;
        //   return {
        //     ...state, parentComments: [...action.data.kids]
        //   }

        case TOGGLE_IS_FETCHING:
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

  // export const setCommentInfo = (data) => ({
  //   type: SET_COMMENT_INFO,
  //   data
  // });

  export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
  });

  export const getCurrentNews = (id) => {
    return (dispatch) => {
      
      dispatch(toggleIsFetching(true));
      newsAPI.getCurrentNewsInfo(id).then(data => {
        //debugger;
        dispatch(setCurrentNews(data));
        //dispatch(setCommentInfo(data));
        dispatch(toggleIsFetching(false));
      })
    }
  };

  export default currentNewsReducer;