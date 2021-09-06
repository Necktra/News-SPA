import React from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
import { getComments } from '../../redux/comments-reducer';
// import Preloader from './../common/Preloader';
import Preloader from '../common/Preloader';

class CommentsContainer extends React.Component {

    componentDidMount() {
        //debugger;
        this.props.getComments(this.props.props.match.params.newsId);
        //this.props.parentComments.length !== 0 && this.props.getComments(this.props.parentComments);
    }


    render() {

        //getComments(this.props.parentComments);   
        //debugger;
        return (<>
            {this.props.isFetching ? <Preloader /> : null}

            {this.props.currentCommentsBranch.map(comment => {
                return (<Comments comments={comment} key={comment} getComments={this.props.getComments}/>
                    
                    
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
        //currentNews: state.currentNewsPage.currentNews,
    }
}

export default connect(mapStateToProps,
    {
        getComments,
    }
)(CommentsContainer);