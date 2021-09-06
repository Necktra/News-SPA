import React from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
// import { getComments } from '../../redux/comments-reducer';
import { getNestedComments, getComments } from '../../redux/comments-reducer';
// import Preloader from './../common/Preloader';
import Preloader from '../common/Preloader';

class CommentsContainer extends React.Component {

    componentDidMount() {
        //debugger;
        this.props.getComments(this.props.props.match.params.newsId);
        //this.props.parentComments.length !== 0 && this.props.getComments(this.props.parentComments);
    }


    render () {

        //getComments(this.props.parentComments);   
       
        return (<>
            {this.props.isFetching ? <Preloader /> : null}

            {this.props.currentCommentsBranch.map(comment => {

            // debugger;    
                return (<Comments comments={comment} key={comment} 
                    //getComments={this.props.getComments}
                    getNestedComments={this.props.getNestedComments}
                    openNestedComments={this.props.openNestedComments.filter(el => {
                       // debugger;
                        return el.parentId === comment.id})}
                        //return el.nestComment.id === comment.id})}
                    />
                    
                    
                    )
            })}

        </>)
    }



}

let mapStateToProps = (state) => {
    return {
        //parentComments: state.currentNewsPage.parentComments,
        isFetching: state.comments.isFetching,
        currentCommentsBranch: state.comments.currentCommentsBranch,
        openNestedComments: state.comments.openNestedComments,
        //currentNews: state.currentNewsPage.currentNews,
    }
}

export default connect(mapStateToProps,
    {
        getComments,
        getNestedComments,
    }
)(CommentsContainer);