import {
  newsAPI
} from "../api/api";

const SET_COMMENTS = 'SET_COMMENTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const SET_NESTED_COMMENTS = 'SET_NESTED_COMMENTS';
//const TOGGLE_SHOW_COMMENTS_IN_PROGRESS = 'TOGGLE_SHOW_COMMENTS_IN_PROGRESS';

let initialState = {
    //parentComments: [],
    currentCommentsBranch: [],
    //pageSize: 10,
    //totalUsersCount: 0,
    isFetching: false,
    openComments: [],
    openNestedComments: [],
  };

  
  const commentsReducer = (state = initialState, action) => {
    switch (action.type) {

      case SET_COMMENTS:
        //debugger;
        return {
          ...state, currentCommentsBranch: [...state.currentCommentsBranch, ...action.data]
        }

        case SET_NESTED_COMMENTS:
          //debugger;
          return {
            // ...state, openNestedComments: [...state.openNestedComments, ...action.data]
            ...state, openNestedComments: [...state.openNestedComments, ...action.data.map(el => {

              return {parentId: el.parent, nestComment: el}
            })
          ]
          }

        case TOGGLE_IS_FETCHING:
          return {
            ...state, isFetching: action.isFetching
          }
        default:
          return state;
    }
  }


  export const setComments = (data) => ({
    type: SET_COMMENTS,
    data
  });

  export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
  });

  export const setNestedComments = (data) => ({
    type: SET_NESTED_COMMENTS,
    data
  });

  // export const getComments = (data) => {
  //   debugger;
  //   return (dispatch) => {
  //     debugger;
  //     //dispatch(toggleIsFetching(true));
  //     //newsAPI.getNews().then(data => {
       
  //       dispatch(setComments(data));
  //      // dispatch(toggleIsFetching(false));
  //     //})
  //   }
  // };

  export const getComments = (id) => {
    //debugger;
    return (dispatch) => {
      
      dispatch(toggleIsFetching(true));
      newsAPI.getCommentInfo(id).then(data => {
       //debugger;
        dispatch(setComments(data));
       dispatch(toggleIsFetching(false));
      })
    }
  };

  export const getNestedComments = (id) => {
    //debugger;
    return (dispatch) => {
      
      dispatch(toggleIsFetching(true));
      newsAPI.getCommentInfo(id).then(data => {
       //debugger;
        dispatch(setNestedComments(data));
       dispatch(toggleIsFetching(false));
      })
    }
  };

  export default commentsReducer;