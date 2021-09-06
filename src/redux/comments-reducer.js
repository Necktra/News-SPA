import {
  newsAPI
} from "../api/api";

const SET_COMMENTS = 'SET_COMMENTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    parentComments: [],
    currentCommentsBranch: [],
    //pageSize: 10,
    //totalUsersCount: 0,
    isFetching: false,
    isOpen: false,
  };

  
  const commentsReducer = (state = initialState, action) => {
    switch (action.type) {

      case SET_COMMENTS:
        debugger;
        return {
          ...state, parentComments: [...action.parentComments]
        }
        case TOGGLE_IS_FETCHING:
          return {
            ...state, isFetching: action.isFetching
          }
        default:
          return state;
    }
  }


  export const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments
  });

  export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
  });

  // export const getComments = (data) => {
  //   debugger;
  //   return (dispatch) => {
  //     //dispatch(toggleIsFetching(true));
  //     //newsAPI.getNews().then(data => {
       
  //       dispatch(setComments(data));
  //      // dispatch(toggleIsFetching(false));
  //     //})
  //   }
  // };

  export const getComments = (id) => {
    debugger;
    return (dispatch) => {
      dispatch(toggleIsFetching(true));
      newsAPI.getCommentInfo(id).then(data => {
       
        dispatch(setComments(data));
       dispatch(toggleIsFetching(false));
      })
    }
  };


  export default commentsReducer;