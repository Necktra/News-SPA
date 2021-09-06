import React from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
import { getComments } from '../../redux/comments-reducer';
// import Preloader from './../common/Preloader';
import Preloader from '../common/Preloader';

class CommentsContainer extends React.Component {

    // componentDidMount() {
    //     debugger;

    //     this.props.parentComments.length !== 0 && this.props.getComments(this.props.parentComments);
    // }


    render() {
        //debugger;
        return (<>
            {this.props.isFetching ? <Preloader /> : null}

        {this.props.parentComments.map(comment => {

getComments(comment);
        //    return <Comments comments={this.props.parentComments}/>
        return <Comments comments={comment}/>
        })}

            {/* <Comments comments={this.props.parentComments} /> */}

        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        parentComments: state.currentNewsPage.parentComments,
        isFetching: state.comments.isFetching,
        //currentNews: state.currentNewsPage.currentNews,
    }
}

export default connect(mapStateToProps,
    {
        getComments,
    }
)(CommentsContainer);