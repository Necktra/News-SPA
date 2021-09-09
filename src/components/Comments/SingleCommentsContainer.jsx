import React from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
import { getNestedComments } from '../../redux/comments-reducer';

class SingleCommentsContainer extends React.Component {

    render() {
        return <Comments comments={this.props.comment} key={this.props.comment}
            getNestedComments={this.props.getNestedComments}
            nestIsFetching={this.props.nestIsFetching}
            openNestedComments={this.props.openNestedComments.filter(el => {
                return el.parentId === this.props.comment.id
            })} />
    }
}

let mapStateToProps = (state) => {
    return {
        openNestedComments: state.comments.openNestedComments,
        nestIsFetching: state.comments.isFetching,
    }
}

export default connect(mapStateToProps,
    {
        getNestedComments,
    }
)(SingleCommentsContainer);